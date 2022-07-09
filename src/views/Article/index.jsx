import React, { Component } from "react";
import moment from "moment";
import { Formik } from "formik";

// component
import Comment from "../../components/Comment";
import Modal from "../../components/Modal";
import Popup from "../../components/Popup";
import {
  S, C, E, F,
} from "./styles";

// function
import { setEmojiCookies, setVisitorCookies, getEmojiCookies } from "../../core/utils/cookie";
import progress from "../../core/hoc/progress";
import { CommentSchema } from "../../core/utils/validateForm";
import { commentsAPI, emojiAPI, blogAPI } from "../../api";
import { withErrorConsumer } from "../../context/ErrorContext";

// asset
import IMG from "../../assets/images/face.svg";
import CLOSEIMG from "../../assets/images/close.svg";
import { EMOJI_DATA } from "../../core/constants/emoji";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: null,
      emoji: -1,
      emojiData: {},
      commentList: [],
      visible: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    Promise.all([commentsAPI.get(id), emojiAPI.get(id), blogAPI.get(id)])
      .then(([result1, result2, result3]) => {
        const commentList = result1.data;
        const emojiData = result2.data;
        const { html } = result3.data;
        this.setState(() => ({
          commentList,
          emojiData: { ...emojiData },
          html,
        }));
      })
      .catch((e) => {
        this.props.errorContext.setError(e);
      });

    const emoji = getEmojiCookies(id);
    if (emoji) {
      this.setState(() => ({ emoji }));
    }
    if (setVisitorCookies(id)) {
      blogAPI.put(id, { visitor: true }).catch((e) => {
        this.props.errorContext.setError(e);
      });
    }
  }

  onClickModal = () => {
    this.setState(() => ({ visible: true }));
  };

  onClose = () => {
    this.setState(() => ({ visible: false }));
  };

  onClickEmoji = (name) => {
    if (name === this.state.emoji) {
      return;
    }
    const { id } = this.props.match.params;
    const prevEmoji = getEmojiCookies(id);
    this.setState(() => ({ emoji: name }));
    const { emojiData } = this.state;
    let data = { ...emojiData, [name]: emojiData[name] + 1 };
    if (prevEmoji) {
      data = { ...data, [prevEmoji]: emojiData[prevEmoji] - 1 };
    }
    emojiAPI.put(id, data).then(() => {
      setEmojiCookies(id, name);
      emojiAPI.get(id).then((result) => {
        this.setState(() => ({
          emojiData: { ...result.data },
        }));
      });
    });
  };

  renderTag = () => (
    <S.Tag>
      <S.TagTitle>Tags: </S.TagTitle>

      <S.TagName>#Python</S.TagName>
      <S.TagName>#NLP</S.TagName>
      <S.TagName>#NLP</S.TagName>
      <S.TagName>#NLP</S.TagName>
      <S.TagName>#NLP</S.TagName>
      <S.TagName>#NLP</S.TagName>
    </S.Tag>
  );

  renderEmoji = () => {
    const { emojiData } = this.state;
    return (
      <E.Wrapper>
        {EMOJI_DATA.map((values) => (
          <E.Item key={values.id}>
            <E.IconItem
              onClick={() => this.onClickEmoji(values.name)}
              active={this.state.emoji === values.name}
            >
              <E.Icon src={values.img} />
              <E.Text>{values.text}</E.Text>
            </E.IconItem>
            <E.TextNumber>{emojiData[values.name]}</E.TextNumber>
          </E.Item>
        ))}
      </E.Wrapper>
    );
  };

  renderComments = () => {
    const { commentList } = this.state;
    return (
      <C.Wrapper>
        <C.Title>Comments</C.Title>
        {commentList.map((values, key) => {
          const time = moment(values.create_time).endOf("day").fromNow();
          return (
            <Comment
              key={key}
              name={values.name}
              time={time}
              content={values.comment}
              character={values.character}
            />
          );
        })}
      </C.Wrapper>
    );
  };

  onSubmit = (values, { resetForm }) => {
    const { id } = this.props.match.params;
    const idInt = parseInt(id, 10);
    const data = { blog_id: idInt, ...values };

    commentsAPI
      .post(data)
      .then(() => {
        this.onClose();
        resetForm();
      })
      .then(() => {
        commentsAPI.get(id).then((result) => {
          this.setState(() => ({
            commentList: result.data,
          }));
        });
      });
  };

  renderModal = () => (
    <Modal visible={this.state.visible} onClose={this.onClose}>
      <F.Wrapper>
        <F.Img src={CLOSEIMG} alt="" onClick={this.onClose} />
        <F.Title>Comment</F.Title>
        <Formik
          initialValues={{ name: "", comment: "" }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={CommentSchema}
          onSubmit={this.onSubmit}
        >
          {(formikProps) => (
            <F.Form onSubmit={formikProps.handleSubmit}>
              <F.NameInput
                type="text"
                placeholder="Name"
                autoComplete="off"
                name="name"
                autoFocus
                onChange={formikProps.handleChange}
                value={formikProps.values.name}
                error={formikProps.errors.name}
              />
              <F.ContentInput
                placeholder="Comment"
                autoComplete="off"
                name="comment"
                onChange={formikProps.handleChange}
                value={formikProps.values.comment}
                error={formikProps.errors.comment}
              />
              <F.Btn type="submit">Submit</F.Btn>
            </F.Form>
          )}
        </Formik>
      </F.Wrapper>
    </Modal>
  );

  render() {
    return (
      <S.Wrapper>
        <S.Box>
          <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
        </S.Box>
        <S.MsgBox>
          <Popup />
          <S.Img src={IMG} alt="" onClick={this.onClickModal} />
        </S.MsgBox>
        {this.renderTag()}
        {this.renderEmoji()}
        {this.renderComments()}
        {this.renderModal()}
      </S.Wrapper>
    );
  }
}

export default progress(withErrorConsumer(Article));

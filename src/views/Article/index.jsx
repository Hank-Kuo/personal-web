import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import Progress from '../../core/hoc/progress';
import Comment from '../../components/Comment';
import Modal from '../../components/Modal';
import Popup from '../../components/Popup';
import { S, C, E, F } from './styles';
import { DATA } from './data';

import { setCookies } from '../../core/utils/cookie';
// import { getIcon } from '../../core/utils/randomImg';

import IMG from '../../assets/images/face.svg';
import THUMBIMG from '../../assets/images/emoji/thumb.png';
import SADIMG from '../../assets/images/emoji/sad.png';
import WOWIMG from '../../assets/images/emoji/wow.png';
import CLAPIMG from '../../assets/images/emoji/clap.png';
import COOLIMG from '../../assets/images/emoji/cool.png';
import LOVEIMG from '../../assets/images/emoji/love.png';
import THINKIMG from '../../assets/images/emoji/think.png';
import YAIMG from '../../assets/images/emoji/ya.png';
import CLOSEIMG from '../../assets/images/close.svg';
import input from '../../data/NLP.md';

const Emoji_DATA = [
  {
    id: 1,
    name: 'Funny',
    img: YAIMG,
  },
  {
    id: 2,
    name: 'Sad',
    img: SADIMG,
  },
  {
    id: 3,
    name: 'Wow',
    img: WOWIMG,
  },
  {
    id: 4,
    name: 'Clap',
    img: CLAPIMG,
  },
  {
    id: 5,
    name: 'Perfect',
    img: THUMBIMG,
  },
  {
    id: 6,
    name: 'Too Hard',
    img: THINKIMG,
  },
  {
    id: 7,
    name: 'Love',
    img: LOVEIMG,
  },
  {
    id: 8,
    name: 'Cool',
    img: COOLIMG,
  },
];

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: null, emoji: -1, visible: false };
  }

  componentDidMount() {
    fetch(input)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
    setCookies(this.props.match.params.id);
    // const img = getIcon();
    // this.setState({ icon: img['img'] });
  }

  onClickModal = () => {
    this.setState(() => ({ visible: true }));
  };

  onClose = () => {
    this.setState(() => ({ visible: false }));
  };

  onClickEmoji = (id) => {
    this.setState(() => ({ emoji: id }));
  };

  renderEmoji = () => {
    return (
      <E.Wrapper>
        {Emoji_DATA.map((values) => {
          return (
            <E.Item>
              <E.IconItem
                onClick={() => this.onClickEmoji(values.id)}
                active={this.state.emoji === values.id}
              >
                <E.Icon src={values.img} />
                <E.Text>{values.name}</E.Text>
              </E.IconItem>
              <E.TextNumber>{1}</E.TextNumber>
            </E.Item>
          );
        })}
      </E.Wrapper>
    );
  };

  renderComments = () => {
    return (
      <C.Wrapper>
        <C.Title>Comments</C.Title>
        {DATA.map((values) => {
          return (
            <Comment
              name={values.name}
              time={values.time}
              content={values.content}
            />
          );
        })}
      </C.Wrapper>
    );
  };

  renderModal = () => {
    return (
      <Modal visible={this.state.visible} onClose={this.onClose}>
        <F.Wrapper>
          <F.Img src={CLOSEIMG} alt="" onClick={this.onClose} />
          <F.Title>Comment</F.Title>
          <F.NameInput placeholder="Name" />
          <F.ContentInput placeholder="Comment" />
          <F.Btn type="submit" onClick={this.onClose}></F.Btn>
        </F.Wrapper>
      </Modal>
    );
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <>
        <S.Wrapper>
          <S.Box>
            <ReactMarkdown source={this.state.terms} />
          </S.Box>
          <S.MsgBox>
            <Popup />
            <S.Img src={IMG} alt="" onClick={this.onClickModal} />
          </S.MsgBox>
          {this.renderEmoji()}
          {this.renderComments()}
          {this.renderModal()}
        </S.Wrapper>
      </>
    );
  }
}

export default Progress(Article);

import React, { Component } from "react";
import { Formik } from "formik";

import Dropdown from "../../components/Dropdown";
import InfiniteScroll from "../../components/InfinitScroll";
import { S } from "./styles";

import { CreateBlogSchema } from "../../core/utils/validateForm";
import FocusError from "../../core/utils/focusError";
import { blogAPI, tagAPI } from "../../api";
import { withErrorConsumer } from "../../context/ErrorContext";

class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogNameFocus: false,
      tagsFocus: false,
      blogURLFocus: false,
      imgURLFocus: false,
    };
  }

  _onFocus = (event) => {
    const name = `${event.target.name}Focus`;
    this.setState({
      [name]: true,
    });
  };

  _onBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      const name = `${event.target.name}Focus`;
      this.setState({
        [name]: false,
      });
    }
  };

  callAPI = async (page = 1) => {
    const data = await tagAPI
      .fetch({ page })
      .then((v) => v.data)
      .catch((e) => {
        this.props.errorContext.setError(e);
      });

    return [data.tags, data.meta];
  };

  onSubmit = (values, { resetForm }) => {
    console.log(values);
    const data = {
      title: values.blogName,
      tags: values.tags,
      img_link: values.imgURL,
      link: values.blogURL,
    };

    blogAPI
      .post(data)
      .then(() => {
        alert("Create new Blog to your website");
        resetForm();
      })
      .catch((e) => {
        this.props.errorContext.setError(e);
      });
  };

  renderForm = () => {
    const {
      blogNameFocus, tagsFocus, blogURLFocus, imgURLFocus,
    } = this.state;
    return (
      <Formik
        initialValues={{
          blogName: "",
          blogURL: "",
          imgURL: "",
          tags: [],
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={CreateBlogSchema}
        onSubmit={this.onSubmit}
      >
        {(formikProps) => (
          <S.Form onSubmit={formikProps.handleSubmit}>
            <S.Item>
              <S.FormLabel htmlFor="blogName" type="text" active={blogNameFocus}>
                Blog name
              </S.FormLabel>
              <S.Input
                type="text"
                id="blogName"
                name="blogName"
                autoComplete="off"
                autoFocus
                onFocus={this._onFocus}
                onBlur={this._onBlur}
                onChange={formikProps.handleChange}
                value={formikProps.values.blogName}
                error={formikProps.errors.blogName}
              />
            </S.Item>
            {formikProps.errors.blogName ? (
              <S.ErrorText>{formikProps.errors.blogName}</S.ErrorText>
            ) : null}
            <S.Item>
              <S.FormLabel htmlFor="tags" active={tagsFocus}>
                Tags
              </S.FormLabel>
              <Dropdown
                name="tags"
                value={formikProps.values.tags}
                callAPI={this.callAPI}
                renderTagsList={() => (
                  <InfiniteScroll
                    id="tag"
                    api={this.callAPI}
                    render={(_, data) => data.map((v, key) => (
                      <S.DropdownItem
                        key={key}
                        active={formikProps.values.tags.includes(v.name)}
                        onClick={() => {
                          if (formikProps.values.tags.length < 5) {
                            if (formikProps.values.tags.includes(v.name)) {
                              formikProps.setFieldValue(
                                "tags",
                                formikProps.values.tags.filter((value) => value !== v.name),
                              );
                            } else {
                              formikProps.setFieldValue("tags", [
                                ...formikProps.values.tags,
                                v.name,
                              ]);
                            }
                          }
                        }}
                      >
                        {v.name}
                      </S.DropdownItem>
                    ))}
                  />
                )}
                onChange={(data) => {
                  if (data.length < 5) {
                    formikProps.setFieldValue("tags", data);
                  }
                }}
                error={formikProps.errors.tags}
              />
            </S.Item>
            {formikProps.errors.tags ? <S.ErrorText>{formikProps.errors.tags}</S.ErrorText> : null}
            <S.Item>
              <S.FormLabel htmlFor="blogURL" active={blogURLFocus}>
                Blog url
              </S.FormLabel>
              <S.Input
                type="text"
                id="blogURL"
                name="blogURL"
                autoComplete="off"
                value={formikProps.values.blogURL}
                onFocus={this._onFocus}
                onBlur={this._onBlur}
                onChange={formikProps.handleChange}
                error={formikProps.errors.blogURL}
              />
            </S.Item>
            {formikProps.errors.blogURL ? (
              <S.ErrorText>{formikProps.errors.blogURL}</S.ErrorText>
            ) : null}
            <S.Item>
              <S.FormLabel htmlFor="imgURL" active={imgURLFocus}>
                IMG url
              </S.FormLabel>
              <S.Input
                type="text"
                id="imgURL"
                name="imgURL"
                autoComplete="off"
                value={formikProps.values.imgURL}
                onFocus={this._onFocus}
                onBlur={this._onBlur}
                onChange={formikProps.handleChange}
                error={formikProps.errors.imgURL}
              />
            </S.Item>
            {formikProps.errors.imgURL ? (
              <S.ErrorText>{formikProps.errors.imgURL}</S.ErrorText>
            ) : null}
            <S.Btn type="submit">Submit</S.Btn>
            <FocusError />
          </S.Form>
        )}
      </Formik>
    );
  };

  render() {
    return (
      <S.Wrapper>
        <S.Title>Upload Blog</S.Title>
        <S.SubTitle>Upload your blog to Server</S.SubTitle>
        {this.renderForm()}
      </S.Wrapper>
    );
  }
}

export default withErrorConsumer(CreateBlog);

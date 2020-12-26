import React, { Component } from 'react';
import { Formik } from 'formik';

import { S } from './styles';

import { CreateBlogSchema } from '../../core/utils/validateForm';
import FocusError from '../../core/utils/focusError';
import { blogAPI } from '../../api';

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
    const name = event.target.name + 'Focus';
    this.setState({
      [name]: true,
    });
  };

  _onBlur = (event) => {
    const value = event.target.value;
    if (!value) {
      const name = event.target.name + 'Focus';
      this.setState({
        [name]: false,
      });
    }
  };

  onSubmit = (values, { resetForm }) => {
    const data = {
      title: values.blogName,
      tag: values.tags,
      img_link: values.imgURL,
      link: values.blogURL,
    };
    blogAPI.post(data).then(()=>{
      alert('Create new Blog to your website');
      resetForm();
    });
    
  };

  render() {
    return (
      <S.Wrapper>
        <S.Title>Upload Blog</S.Title>
        <S.SubTitle>Upload your blog to Server</S.SubTitle>
        <Formik
          initialValues={{ blogName: '', blogURL: '', imgURL: '', tags: '' }}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={CreateBlogSchema}
          onSubmit={this.onSubmit}
        >
          {(formikProps) => (
            <S.Form onSubmit={formikProps.handleSubmit}>
              <S.Item>
                <S.FormLabel
                  htmlFor="blogName"
                  type="text"
                  active={this.state.blogNameFocus}
                >
                  Blog name
                </S.FormLabel>
                <S.Input
                  type="text"
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
                <S.FormLabel htmlFor="tags" active={this.state.tagsFocus}>
                  Tags
                </S.FormLabel>
                <S.Input
                  type="text"
                  name="tags"
                  autoComplete="off"
                  value={formikProps.values.tags}
                  onFocus={this._onFocus}
                  onBlur={this._onBlur}
                  onChange={formikProps.handleChange}
                  error={formikProps.errors.tags}
                />
              </S.Item>
              {formikProps.errors.tags ? (
                <S.ErrorText>{formikProps.errors.tags}</S.ErrorText>
              ) : null}
              <S.Item>
                <S.FormLabel htmlFor="blogURL" active={this.state.blogURLFocus}>
                  Blog url
                </S.FormLabel>
                <S.Input
                  type="text"
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
                <S.FormLabel htmlFor="imgURL" active={this.state.imgURLFocus}>
                  IMG url
                </S.FormLabel>
                <S.Input
                  type="text"
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
      </S.Wrapper>
    );
  }
}

export default CreateBlog;

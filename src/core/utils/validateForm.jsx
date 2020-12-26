import * as Yup from 'yup';

export const CreateBlogSchema = Yup.object().shape({
  blogName: Yup.string().required('Blog Name 為必填'),
  blogURL: Yup.string().url('Not valid website name').required('Blog URL 為必填'),
  tags: Yup.string().required('tags 為必填'),
  imgURL: Yup.string().url('Not valid website name').required('IMG URL 為必填'),
});

export const LoginSchema = Yup.object().shape({
  account: Yup.string().required('Account 為必填'),
  password: Yup.string().required('Password 為必填'),
});

export const CommentSchema = Yup.object().shape({
  name: Yup.string().required('Name 為必填'),
  comment: Yup.string().required('Comment 為必填'),
});
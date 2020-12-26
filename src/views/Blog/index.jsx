import React, { Component } from 'react';

import Progress from '../../core/hoc/progress';
import Card from '../../components/Card';
import { S } from './styles';

import { blogAPI } from '../../api';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    blogAPI.fetch().then((values) => {
      this.setState(() => ({ data: values.data }));
    });
  }
  render() {
    return (
      <S.Wrapper>
        <S.Title>BLOG</S.Title>
        <S.Container>
          <S.ContainerBox>
            <S.Box>
              {this.state.data.map((values) => {
                return (
                  <Card
                    key={values.id}
                    id={values.id}
                    title={values.title}
                    createTime={values.create_time}
                    tags={values.tag}
                    img={values.img_link}
                    view={values.visitor}
                  />
                );
              })}
            </S.Box>
          </S.ContainerBox>
        </S.Container>
      </S.Wrapper>
    );
  }
}

export default Progress(Blog);

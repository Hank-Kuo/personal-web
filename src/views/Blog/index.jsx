import React, { Component } from "react";

import progress from "../../core/hoc/progress";
import Card from "../../components/Card";
import { S } from "./styles";

import { blogAPI } from "../../api";
import { withErrorConsumer } from "../../context/ErrorContext";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    blogAPI
      .fetch()
      .then((values) => {
        this.setState(() => ({ data: values.data }));
      })
      .catch((e) => {
        this.props.errorContext.setError(e);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <S.Wrapper>
        <S.Title>BLOG</S.Title>
        <S.Container>
          <S.ContainerBox>
            <S.Box>
              {data.map((values) => (
                <Card
                  key={values.id}
                  id={values.id}
                  title={values.title}
                  createTime={values.create_time}
                  tags={values.tag}
                  img={values.img_link}
                  view={values.visitor}
                />
              ))}
            </S.Box>
          </S.ContainerBox>
        </S.Container>
      </S.Wrapper>
    );
  }
}

export default progress(withErrorConsumer(Blog));

import React, { Component } from "react";

import Card from "../../components/Card";
import progress from "../../core/hoc/progress";
import InfiniteScroll from "../../components/InfinitScroll";
import { S } from "./styles";

import { blogAPI } from "../../api";
import { withErrorConsumer } from "../../context/ErrorContext";

class Blog extends Component {
  callAPI = async (page = 1) => {
    const data = await blogAPI
      .fetch({
        page,
      })
      .then((v) => {
        console.log(v.data);
        return v.data;
      })
      .catch((e) => {
        console.log(e.response);
        this.props.errorContext.setError(e);
      });

    return [data.blogs, data.meta];
  };

  render() {
    // const { data } = this.state;
    return (
      <S.Wrapper>
        <S.Title>BLOG</S.Title>
        <S.Container>
          <S.ContainerBox>
            <S.Box>
              <InfiniteScroll
                name="blogs"
                api={this.callAPI}
                render={(_, data) => data.map((values) => (
                  <Card
                    key={values.id}
                    id={values.id}
                    title={values.title}
                    createTime={values.created_at}
                    tags={values.tags}
                    img={values.img_link}
                    view={values.visitor}
                  />
                ))}
              />
            </S.Box>
          </S.ContainerBox>
        </S.Container>
      </S.Wrapper>
    );
  }
}

export default progress(withErrorConsumer(Blog));

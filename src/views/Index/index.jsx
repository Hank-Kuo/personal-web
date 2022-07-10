import React, { Component } from "react";

import progress from "../../core/hoc/progress";
import { S } from "./styles";

import { healthzAPI } from "../../api";

import IMG from "../../assets/images/home.jpg";
import IMG_COMPRESS from "../../assets/images/home_compress.jpg";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { img: IMG_COMPRESS };
  }

  componentDidMount() {
    console.log("render");
    healthzAPI.fetch().then((v) => {
      console.log(v);
    });
    setTimeout(() => {
      this.setState(() => ({ img: IMG }));
    }, 1500);
  }

  render() {
    const { img } = this.state;
    return (
      <>
        <S.BackgroundBox>
          <S.BackgroundIMG src={img} alt="" />
        </S.BackgroundBox>
        <S.Overlay />
        <S.Wrapper>
          <S.Section>
            <S.Box>
              <S.Title>
                I am Hank Kuo
                <br />
                <S.SubTitle> Welcome to my website.</S.SubTitle>
              </S.Title>
              <S.BtnList>
                <S.Btn href="/about">ABOUT</S.Btn>
                <S.Btn href="/blog">BLOG</S.Btn>
              </S.BtnList>
            </S.Box>
          </S.Section>
        </S.Wrapper>
      </>
    );
  }
}

export default progress(Index);

import React, { Component } from "react";

import progress from "../../core/hoc/progress";
import { S } from "./styles";

import DATA from "../../assets/data/personal";

class Contact extends Component {
  render() {
    return (
      <S.Wrapper>
        <S.Title>Zhen Yuan Kuo</S.Title>
        <S.SubTitle>
          Always believe that your dream can come true and
          <br />
          just keep working for what you want to achieve.
        </S.SubTitle>
        <S.IconList>
          <S.Link href={DATA.link.github} target="_blank">
            <S.GithubIcon />
          </S.Link>
          <S.Link href={DATA.link.fb} target="_blank">
            <S.FacebookIcon />
          </S.Link>
          <S.Link href={DATA.link.linkedin} target="_blank">
            <S.LinkedinIcon />
          </S.Link>
          <S.Link href={DATA.link.instagram} target="_blank">
            <S.InstagramIcon />
          </S.Link>
          <S.Link href={DATA.link.twitter} target="_blank">
            <S.TwitterIcon />
          </S.Link>
        </S.IconList>
        <S.Btn href="/about">ABOUT ME</S.Btn>
      </S.Wrapper>
    );
  }
}

export default progress(Contact);

import React, { Component } from 'react';

import Progress from '../../core/hoc/progress';
import { S } from './styles';

class Contact extends Component {
  render() {
    return (
      <S.Wrapper>
        <S.Title>Zhen Yuan Kuo</S.Title>
        <S.SubTitle>
          Always believe that your dream can come true and<br />
          just keep working for what you want to achieve.
        </S.SubTitle>
        <S.IconList>
          <S.GithubIcon></S.GithubIcon>
          <S.FacebookIcon></S.FacebookIcon>
          <S.LinkedinIcon></S.LinkedinIcon>
          <S.InstagramIcon></S.InstagramIcon>
          <S.TwitterIcon></S.TwitterIcon>
        </S.IconList>
        <S.Btn href="/about">ABOUT ME</S.Btn>
      </S.Wrapper>
    );
  }
}

export default Progress(Contact);

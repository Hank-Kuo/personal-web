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
          <S.Link href="https://github.com/Hank-Kuo" target="_blank">
            <S.GithubIcon />
          </S.Link>
          <S.Link href="https://www.facebook.com/shigeno.goro.90/" target="_blank">
            <S.FacebookIcon />
          </S.Link>
          <S.Link>
            <S.LinkedinIcon />
          </S.Link>
          <S.Link>
            <S.InstagramIcon />
          </S.Link>
          <S.Link>
            <S.TwitterIcon />
          </S.Link>
        </S.IconList>
        <S.Btn href="/about">ABOUT ME</S.Btn>
      </S.Wrapper>
    );
  }
}

export default Progress(Contact);

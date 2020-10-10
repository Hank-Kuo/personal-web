import React, { Component } from 'react';

import Progress from '../../lib/hoc/progress';
import { S } from './styles';

import IMG from '../../assets/images/home3.jpg';

class Index extends Component {
  render() {
    return (
      <>
        <S.BackgroundBox>
          <S.BackgroundIMG src={IMG} alt="" />
        </S.BackgroundBox>
        <S.Overlay />
        <S.Wrapper>
          <S.Section>
            <S.Box>
              <S.Title>
                I am Hank Kuo,
                <br /> good at software development and ML related.
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

export default Progress(Index);

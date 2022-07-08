import React, { Component } from 'react';

import Progress from '../../core/hoc/progress';
import { S } from './styles';

import IMG from '../../assets/images/home3.jpg';
import IMG_COMPRESS from '../../assets/images/home3_compress.jpg';

class Index extends Component {
  state = { img: IMG_COMPRESS };
  componentDidMount(){
    setTimeout(()=>{
      this.setState(()=>({img: IMG}))
    }, 1500)
  }
  render() {
    return (
      <>
        <S.BackgroundBox>
          <S.BackgroundIMG src={this.state.img} alt="" />
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

export default Progress(Index);

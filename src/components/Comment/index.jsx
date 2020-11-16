import React from 'react';

import IMG from '../../assets/images/icon/3.jpg';
import { S } from './styles';

export default function (props) {
  return (
    <S.Wrapper>
      <S.Img src={IMG} alt="" />
      <S.Box>
        <S.Head>
          <S.Img1 src={IMG} alt="" />
          <S.InnerBox>
            <S.Title>{props.name}</S.Title>
            <S.Time>{props.time}</S.Time>
          </S.InnerBox>
        </S.Head>
        <S.Content>{props.content}</S.Content>
      </S.Box>
    </S.Wrapper>
  );
}

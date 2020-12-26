import React from 'react';

import { getIcon } from '../../core/utils/getIconImg';
import { S } from './styles';

export default function (props) {
  const img = getIcon(props.character)
  return (
    <S.Wrapper>
      <S.Img src={img} alt="" />
      <S.Box>
        <S.Head>
          <S.Img1 src={img} alt="" />
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

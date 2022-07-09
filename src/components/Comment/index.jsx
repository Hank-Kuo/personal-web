import React from "react";

import { getIcon } from "../../core/utils/getIconImg";
import { S } from "./styles";

export default function ({
  name, time, content, character,
}) {
  const img = getIcon(character);
  return (
    <S.Wrapper>
      <S.Img src={img} alt="" />
      <S.Box>
        <S.Head>
          <S.Img1 src={img} alt="" />
          <S.InnerBox>
            <S.Title>{name}</S.Title>
            <S.Time>{time}</S.Time>
          </S.InnerBox>
        </S.Head>
        <S.Content>{content}</S.Content>
      </S.Box>
    </S.Wrapper>
  );
}

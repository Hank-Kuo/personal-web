import React from "react";
import moment from "moment-timezone";

import { getIcon } from "../../core/utils/getIconImg";
import { S } from "./styles";

export default function ({
  name, content, character, createdTime,
}) {
  const img = getIcon(character);
  const t = moment.tz(createdTime, "UTC").tz("Asia/Taipei");
  const time = t.fromNow();
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

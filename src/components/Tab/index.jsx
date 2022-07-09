import React from "react";

import { S } from "./styles";

export default function (props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Btn values={1} onClick={props.onClick}>Cube</S.Btn>
        <S.Btn values={2} onClick={props.nClick}>Bar</S.Btn>
      </S.Header>
      <S.Content>{props.content1}</S.Content>
      <S.Content>{props.content2}</S.Content>
    </S.Wrapper>
  );
}

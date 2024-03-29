import React from "react";

import { S } from "./styles";

import ERRORIMG from "../../assets/images/error.svg";

export default function (props) {
  return (
    <S.Wrapper show={props.show} close={props.close} onClick={props.onClick}>
      <S.Icon src={ERRORIMG} alt="" />
      <S.Box>
        <S.Title>Error</S.Title>
        <S.Content>{props.message}</S.Content>
      </S.Box>
    </S.Wrapper>
  );
}

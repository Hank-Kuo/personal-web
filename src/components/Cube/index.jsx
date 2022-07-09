import React from "react";

import { C, Cube } from "./styles";

export default function (props) {
  return (
    <C.Link>
      <C.Span />
      <C.Span />
      <C.Span />
      <C.Span />
      <Cube
        color1={props.color1}
        color2={props.color2}
        color3={props.color3}
        color4={props.color4}
        color5={props.color5}
        color6={props.color6}
        abbreColor={props.abbreColor}
        textColor={props.textColor}
      >
        {/* top */}
        <C.Div />
        {/* bottom */}
        <C.Div />
        {/* left */}
        <C.Div />
        {/* right */}
        <C.Div />
        {/* front */}
        <C.Div>{props.abbre}</C.Div>
        {/* back */}
        <C.Div>{props.text}</C.Div>
      </Cube>
    </C.Link>
  );
}

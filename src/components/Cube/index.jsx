import React from 'react';

import { C, Cube } from './styles';

export default function (props) {
  return (
    <C.link>
      <C.span></C.span>
      <C.span></C.span>
      <C.span></C.span>
      <C.span></C.span>
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
        <C.div></C.div>
        {/* bottom */}
        <C.div></C.div>
        {/* left */}
        <C.div></C.div>
        {/* right */}
        <C.div></C.div>
        {/* front */}
        <C.div>{props.abbre}</C.div>
        {/* back */}
        <C.div>{props.text}</C.div>
      </Cube>
    </C.link>
  );
}

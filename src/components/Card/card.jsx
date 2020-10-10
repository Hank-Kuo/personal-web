import React from 'react';

import { C } from './styles';

export default function (props) {
  return (
    <C.Wrapper>
      <C.Box>
        <C.Header>
          <C.Img
            src="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/thumb-449x286-1-1-2-2-1-1.jpg"
            alt=""
          />
        </C.Header>
        <C.Content>
          <C.Time datetime="2015-11-23T11:45:43+00:00">
            <C.Day>23</C.Day>
            <C.Month>Nov</C.Month>
          </C.Time>
          <C.Tag>
            <span>#News</span>
            <span>#News</span>
          </C.Tag>
          <C.Title>
            <span>{props.title}</span>
          </C.Title>
          <C.Info>LIKE: 50 VIEW: 0</C.Info>
        </C.Content>
      </C.Box>
    </C.Wrapper>
  );
}

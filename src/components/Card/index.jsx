import React from 'react';

import { S } from './styles';

export default function (props) {
  return (
    <S.Wrapper>
      <S.CardLink href="/blog/article/1">
        <S.Box>
          <S.Header>
            <S.Img
              src="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/thumb-449x286-1-1-2-2-1-1.jpg"
              alt=""
            />
          </S.Header>
          <S.Content>
            <S.Time datetime="2015-11-23T11:45:43+00:00">
              <S.Day>23</S.Day>
              <S.Month>Nov</S.Month>
            </S.Time>
            <S.Tag>
              <span>#News</span>
              <span>#News</span>
            </S.Tag>
            <S.Title>
              <span>{props.title}</span>
            </S.Title>
            <S.Info>LIKE: 50 VIEW: 0</S.Info>
          </S.Content>
        </S.Box>
      </S.CardLink>
    </S.Wrapper>
  );
}

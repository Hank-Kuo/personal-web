import React from 'react';
import moment from 'moment';

const Img = React.lazy(() => import('./img'));
import { S } from './styles';

export default function (props) {
  const time = moment(props.create_time).format('MMM DD').split(' ');
  const month = time[0];
  const days = time[1];
  const url = `/blog/article/${props.id}`;
  return (
    <S.Wrapper>
      <S.CardLink href={url}>
        <S.Box>
          <S.Header>
            <React.Suspense fallback={<div/>}>
             <Img img={props.img} />
            </React.Suspense>
          </S.Header>
          <S.Content>
            <S.Time datetime="2015-11-23T11:45:43+00:00">
              <S.Day>{days}</S.Day>
              <S.Month>{month}</S.Month>
            </S.Time>
            <S.Tag>
              <span>{props.tags}</span>
            </S.Tag>
            <S.Title>
              <span>{props.title}</span>
            </S.Title>
            <S.Info>VIEW: {props.view}</S.Info>
          </S.Content>
        </S.Box>
      </S.CardLink>
    </S.Wrapper>
  );
}

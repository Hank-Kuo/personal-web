import React from "react";
import moment from "moment";
import { S } from "./styles";

const Img = React.lazy(() => import("./img"));

export default function (props) {
  const time = moment(props.createTime).format("MMM DD").split(" ");
  const month = time[0];
  const days = time[1];
  const url = `/blog/article/${props.id}`;
  return (
    <S.Wrapper>
      <S.CardLink href={url}>
        <S.Box>
          <S.Header>
            <React.Suspense fallback={<div />}>
              <Img img={props.img} />
            </React.Suspense>
          </S.Header>
          <S.Content>
            <S.Time datetime={time}>
              <S.Day>{days}</S.Day>
              <S.Month>{month}</S.Month>
            </S.Time>
            <S.Tag>
              <span>
                {props.tags
                  .slice(0, 2)
                  .map((v) => `#${v.name}`)
                  .join(" ")}
              </span>
            </S.Tag>
            <S.Title>{props.title}</S.Title>
            <S.Info>{`VIEW: ${props.view}`}</S.Info>
          </S.Content>
        </S.Box>
      </S.CardLink>
    </S.Wrapper>
  );
}

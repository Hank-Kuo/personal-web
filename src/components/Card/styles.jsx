import styled from "styled-components";

import { device } from "../../core/constants/styles";

export const S = {
  Wrapper: styled.div`
    max-width: 300px;
    width: 50%;
    @media ${device.M} {
      max-width: 300px;
    }
    @media ${device.L} {
      max-width: 340px;
    }
    @media ${device.XL} {
      max-width: 300px;
    }
  `,
  Box: styled.article`
    position: relative;
    background-color: #fff;
    border-radius: 4%;
    opacity: 0.75;
    cursor: pointer;
    &:hover {
      opacity: 0.93;
      box-shadow: 0 0 20px 2px grey;
      img {
        transform: scale(1.2);
      }
    }
  `,
  Header: styled.div`
    position: relative;
    background-color: #2c3340;
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    max-width: 100%;
    margin: 0px auto;
    border-radius: 4% 4% 0 0;
  `,
  CardLink: styled.a`
    cursor: pointer;
    text-decoration: none !important;
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    backface-visibility: hidden;
    transition: transform 1.5s;
    max-height: 200px;
  `,
  Content: styled.div`
    padding: 25px 25px 35px 25px;
    text-align: center;
    height: 200px;
  `,
  Time: styled.time`
    width: 58px;
    height: 55px;
    color: #fff;
    line-height: 1;
    font-weight: 700;
    text-align: center;
    position: absolute;
    top: 20px;
    right: 20px;
    padding-top: 11px;
    display: block;
    background-color: #e8676b;
  `,
  Day: styled.span`
    display: block;
    font-size: 20px;
    margin-bottom: 2px;
  `,
  Month: styled.span`
    font-size: 13px;
    display: block;
  `,
  Tag: styled.div`
    font-size: 11px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 26px;
    color: lightslategrey;
  `,
  Title: styled.h3`
    color: #373b42;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;
    transition: color 0.15s linear 0s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &:hover {
      color: #e8676b;
    }
  `,
  Info: styled.div`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 13px;
    line-height: 1.3;
    color: lightslategrey;
  `,
  ImgEmpty: styled.div``,
};

import styled, { css } from 'styled-components';

import { device } from '../../core/constants/styles';

const Icon = css`
  padding-left: 5px;
  padding-right: 5px;
  transition: all 0.8s;
  margin: 4px;
  color: #fff;
  font-family: 'Font Awesome 5 Brands';
  font-size: 3.5rem;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  cursor: pointer;
  &:hover {
    color: #8c8c8c;
  }
  @media ${device.XM} {
    font-size: 2.5rem;
  }
`;

export const S = {
  Wrapper: styled.div`
    padding-top: 10rem;

    height: 100vh;
    text-align: center;
    @media ${device.XS} {
      padding: 0;
      margin: 8rem 2.5rem 3rem;
    }
  `,
  Title: styled.h1`
    font-family: 'Fredoka One', cursive;
    font-size: 3.5rem;
    color: white;
    margin-bottom: 0;
  `,
  SubTitle: styled.h2`
    font-family: 'Dancing Script', cursive;
    margin-top: 3rem;
    margin-bottom: 0;
    font-size: 2.5rem;
    @media ${device.XM} {
      margin-top: 40px;
      font-size: 2rem;
    }
  `,
  IconList: styled.div`
    padding: 3rem !important;
  `,
  GithubIcon: styled.i`
    ${Icon}
    &:before {
      content: '\f09b';
      box-sizing: border-box;
    }
  `,
  FacebookIcon: styled.i`
    ${Icon}
    &:before {
      content: '\f09a';
      box-sizing: border-box;
    }
  `,
  InstagramIcon: styled.i`
    ${Icon}
    &:before {
      content: '\f16d';
      box-sizing: border-box;
    }
  `,
  LinkedinIcon: styled.i`
    ${Icon}
    &:before {
      content: '\f08c';
      box-sizing: border-box;
    }
  `,
  TwitterIcon: styled.i`
    ${Icon}
    &:before {
      content: '\f099';
      box-sizing: border-box;
    }
  `,
  Link: styled.a``,
  Btn: styled.a`
    display: block;
    width: 210px;
    color: #fff;
    margin: 0 auto;
    letter-spacing: 0.25rem;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    background: 0 0 !important;
    border: 0.2rem solid #fff;
    font-family: montserrat-semibold, sans-serif;
    cursor: pointer;
    text-decoration: none !important;
    :hover {
      background: white !important;
      color: #000000;
    }
  `,
};

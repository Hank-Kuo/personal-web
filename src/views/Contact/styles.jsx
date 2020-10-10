import styled, { css } from 'styled-components';

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
`;

export const S = {
  Wrapper: styled.div`
    margin-top: 7.5rem;
    text-align: center;
    @media screen and (max-width: 1024px) {
      margin-top: 40%;
    }
    @media screen and (max-width: 1000px) {
      margin-top: 50%;
    }
  `,
  Title: styled.h1`
    color: white;
    margin-bottom: 0;
  `,
  SubTitle: styled.h2`
    margin-bottom: 0;
    font-size: 1.8rem;
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
    text-decoration: none;
    :hover {
      background: white !important;
      color: #000000;
    }
  `,
};

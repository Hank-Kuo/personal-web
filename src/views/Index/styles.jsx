import styled from 'styled-components';

import { device } from '../../lib/styles';

export const S = {
  Overlay: styled.div`
    position: absolute;
    display: table;
    background-color: black;
    opacity: 0.6;
    height: 100%;
    width: 100%;
  `,
  BackgroundBox: styled.div`
    z-index: -100;
    position: fixed;
    overflow: hidden;
    transform: translate3d(0px, 0px, 0px);
    height: 100%;
    width: 100%;
  `,
  BackgroundIMG: styled.img`
    transform: translate3d(0px, 0px, 0px);
    position: absolute;
    left: 0px;
    height: 100%;
    width: 100%;
  `,
  Section: styled.section`
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    padding-bottom: 6.2rem;
    position: relative;

    @media ${device.S} {
      padding-bottom: 40rem;
    }

    @media ${device.M}and (max-width: 1024px) {
      padding-bottom: 25.2rem;
    }
    
    @media ${device.L} {
      padding-bottom: 25.2rem;
    }

    @media ${device.XL} {
      padding-bottom: 6.2rem;
    }
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    display: table;
  `,
  Box: styled.div`
    padding-right: 300px;
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    width: 94%;
    @media screen and (max-width: 1200px) {
      max-width: 650px;
    }
    @media screen and (max-width: 1024px) {
      max-width: 600px;
      padding: 0;
    }
    @media screen and (max-width: 768px) {
      max-width: 500px;
    }
  `,
  BtnList: styled.div`
    position: absolute;
    right: 0;
    bottom: 2.1rem;
    text-align: center;

    @media screen and (max-width: 1200px) {
      position: absolute;
    }
    @media screen and (max-width: 1024px) {
      position: static;
      padding: 0;
      display: flex;
      column-gap: 40px;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  `,
  Btn: styled.a`
    display: block;
    width: 210px;
    padding: 2px;
    margin: 1.5rem 0 0 0;
    color: #fff;
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
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `,
  Title: styled.h1`
    font-size: 3.5rem;
    font-family: librebaskerville-bold, serif;
    color: #fff;
    line-height: 1.35;
    @media screen and (max-width: 1024px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  `,
};

/*
Progress: styled.div`
    transform: translate3d(90%, 0px, 0px);
    background: orange;
    position: fixed;
    z-index: 900;
    top: 0;
    right: 100%;
    width: 100%;
    height: 4px;
  `,
*/

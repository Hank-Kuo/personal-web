import styled from 'styled-components';

import { device } from '../../core/constants/styles';

export const S = {
  Overlay: styled.div`
    position: fixed;
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
    vertical-align: middle;
    position: relative;
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    display: table;
  `,
  Box: styled.div`
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    @media ${device.XS} {
      width: 70%;
      max-width: none;
    }
    @media ${device.S} {
      padding-right: 0px;
      width: 60%;
    }
    @media ${device.M} {
      padding-right: 0px;
      width: 60%;
    }
    @media ${device.L} {
      width: 94%;
      padding-right: 300px;
    }
  `,
  BtnList: styled.div`
    position: absolute;
    display: block;
    right: 0;
    bottom: 2.1rem;
    text-align: center;
    @media ${device.XS} {
      position: static;
    }
    @media ${device.S} {
      position: static;
      margin-top: 40px;
    }
    @media ${device.M} {
      position: static;
      display: flex;
      justify-content: space-between;
    }
    @media ${device.L} {
      position: absolute;
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
    text-decoration: none !important;
    :hover {
      background: white !important;
      color: #000000;
    }
    @media ${device.XS} {
      width: 100%;
    }
    @media ${device.S} {
      width: 100%;
    }
    @media ${device.M} {
      width: 210px;
    }
  `,
  Title: styled.h1`
    font-size: 4rem;
    font-family: librebaskerville-bold, serif;
    color: #fff;
    line-height: 1.35;
    font-weight: bold;
    @media ${device.XM} {
      font-size: 2.2rem;
    }
  `,
  SubTitle: styled.h2`
    font-size: 3.5rem;
    font-family: librebaskerville-bold, serif;
    color: #fff;
    line-height: 1.35;
    font-weight: bold;
    @media ${device.XM} {
      font-size: 2rem;
    }
  `,
};

import styled from 'styled-components';

import { device } from '../../core/constants/styles';

export const S = {
  Wrapper: styled.div`
    display: flex;
    padding: 10px;
    margin: 20px 30px;
    color: #fff;
    align-items: center;
    @media ${device.XM} {
      margin: 20px 10px;
    }
    @media ${device.M} {
      margin: 20px 30px;
    }
  `,
  Img: styled.img`
    border-radius: 20%;
    object-fit: cover;
    max-width: 100px;
    max-height: 120px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    @media ${device.XS} {
      display: none;
    }
  `,
  Img1: styled.img`
    display: none;
    border-radius: 20%;
    object-fit: cover;
    max-width: 50px;
    max-height: 65px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    @media ${device.XS} {
      display: block;
    }
  `,
  Box: styled.div`
    margin-left: 50px;
    max-width: 850px;
    overflow-wrap: break-word;
    line-height: 25px;
    @media ${device.XS} {
      margin-left: 0px;
    }
  `,
  Head: styled.div`
    display: flex;
    align-items: center;
    @media ${device.XS} {
      margin-bottom: 10px;
    }
  `,
  Title: styled.span`
    font-size: 0.85em;
    @media ${device.XS} {
      font-size: 0.8em;
    }
  `,
  Time: styled.span`
    color: #787878;
    margin-left: 15px;
    font-size: 0.5em;
    @media ${device.XS} {
      font-size: 0.3em;
      margin-left: 5px;
    }
  `,
  Content: styled.span`
    overflow-wrap: break-word;
    font-size: 0.9rem;
    @media ${device.XS} {
      display: block;
      padding-left: 10px;
    }
  `,
  InnerBox: styled.div`
    display: flex;
    @media ${device.XS} {
      margin-left: 25px;
      flex-direction: column;
    }
  `,
};

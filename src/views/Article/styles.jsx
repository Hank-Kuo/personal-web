import styled from 'styled-components';

import { device } from '../../core/constants/styles';

export const S = {
  Wrapper: styled.div`
    margin: 8rem auto;
    @media ${device.XS} {
      max-width: 300px;
      margin: 8rem auto 4rem;
    }
    @media ${device.S} {
      max-width: 500px;
    }
    @media ${device.M} {
      max-width: 650px;
    }
    @media ${device.L} {
      max-width: 900px;
    }
    @media ${device.XL} {
      max-width: 1100px;
    }
  `,
  Box: styled.div`
    color: white;
    h1 {
      font-size: 1.7em;
      padding-bottom: 30px;
      font-weight: bold;
      font-size: 2rem;
      margin: 1em 0;
      @media ${device.XS} {
        font-size: 1.4em;
      }
      @media ${device.M} {
        font-size: 1.6em;
      }
      @media ${device.L} {
        font-size: 1.7em;
      }
    }
    h2 {
      font-size: 1.2em;
      font-weight: bold;
      margin: 1em 0;
    }
    h3 {
      font-weight: bold;
    }
    p {
      @media ${device.XS} {
        font-size: 0.9em;
      }
      @media ${device.S} {
        font-size: 0.9em;
      }
      @media ${device.M} {
        font-size: 0.9em;
      }
      @media ${device.L} {
        font-size: 0.85em;
      }
    }
    li {
      font-size: 0.8em;
    }
  `,
  MsgBox: styled.div`
    position: fixed;
    right: 40px;
    bottom: 30px;
  `,
  Img: styled.img`
    width: 50px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background: burlywood;
    }
  `,
};

export const C = {
  Wrapper: styled.div`
    margin-top: 2em;
    @media ${device.XS} {
      margin-top: 2em;
    }
  `,
  Box: styled.div`
    margin-top: 3em;
  `,
  Title: styled.h2`
    font-size: 1.6em;
    color: white;
    margin-bottom: 50px;
    @media ${device.XS} {
      font-size: 1.4em;
      margin-bottom: 40px;
    }
    @media ${device.M} {
      font-size: 1.6em;
    }
    @media ${device.L} {
      font-size: 1.7em;
    }
  `,
};

export const E = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 4em;
    flex-wrap: wrap;
    color: white;
    @media ${device.XS} {
      margin-top: 3em;
    }
    @media ${device.M} {
      margin-top: 4em;
    }
  `,
  Item: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Icon: styled.img`
    height: 24px;
    width: 24px;
    object-fit: cover;
  `,
  Text: styled.span`
    margin-left: 13px;
    font-size: 1.4rem;
  `,
  TextNumber: styled.span`
    margin-top: 10px;
    margin-left: 13px;
    font-size: 1.2rem;
  `,
  IconItem: styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
    border: 3px solid;
    border-color: ${(props) => (props.active ? 'coral' : 'transparent')};
    background: ${(props) => (props.active ? 'coral' : '')};
    cursor: pointer;
    &:hover {
      border-color: coral;
    }
  `,
};

export const F = {
  Wrapper: styled.div`
    position: relative;
    height: 550px;
    width: 550px;
    margin: 80px auto;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 12px;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    padding: 60px 100px;
    @media ${device.XS} {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
      padding: 40px 10% 20px;
      margin: 0;
    }
    @media ${device.S} {
      width: 550px;
      height: 550px;
    }
  `,
  Title: styled.h1`
    text-align: center;
    @media ${device.XS} {
      font-size: 1.8em;
      text-align: left;
    }
  `,
  NameInput: styled.input`
    border-radius: 10px;
    margin-top: 40px;
    border: 2px solid coral;
    padding: 4px 10px;
    outline: none;
  `,
  ContentInput: styled.textarea`
    padding: 10px;
    border-radius: 10px;
    margin-top: 30px;
    height: 150px;
    border: 2px solid coral;
    outline: none;
    font-size: 23px;
    line-height: 1.5;
    @media ${device.XS} {
      height: 300px;
    }
  `,
  Btn: styled.input`
    margin: 50px 25px 0;
    border-radius: 100px;
    background: darksalmon;
    border-color: darksalmon;
    outline: none;
    cursor: pointer;
    @media ${device.XS} {
      margin: 70px 30px 30px;
    }
    @media ${device.XM} {
      margin: 35px 30px 0;
    }
    &:hover {
      opacity: 0.8;
    }
  `,
  Img: styled.img`
    position: absolute;
    right: 15px;
    top: 20px;
    width: 50px;
    cursor: pointer;
    @media ${device.XS} {
      width: 40px;
    }
  `,
};

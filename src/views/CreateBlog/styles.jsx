import styled from "styled-components";

import { device } from "../../core/constants/styles";

export const S = {
  Wrapper: styled.div`
    margin: 7rem auto;
    @media ${device.S} {
      max-width: 500px;
    }
    @media ${device.M} {
      max-width: 700px;
    }
    @media ${device.L} {
      max-width: 800px;
    }
    @media ${device.XL} {
      max-width: 1100px;
    }
  `,
  Title: styled.h2``,
  SubTitle: styled.p`
    font-size: 0.7em;
  `,
  Form: styled.form`
    position: relative;
    > * + * {
      margin-top: 40px;
    }
  `,
  Item: styled.div`
    position: relative;
  `,
  FormLabel: styled.label`
    position: absolute;
    top: ${(props) => (props.active ? "-25px" : "0")};
    font-size: ${(props) => (props.active ? "20px" : "30px")};
    padding: ${(props) => (props.active ? "0 15px" : "0 10px")};
    margin: 10px;
    background-color: #0a0809;
    -webkit-transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out;
    transition: top 0.3s ease-in-out, font-size 0.3s ease-in-out;
  `,
  Input: styled.input`
    width: 100%;
    padding: 20px;
    border: 1px solid white;
    border-color: ${(props) => (props.error ? "darkred" : "white")};
    font-size: 20px;
    background-color: #0a0809;
    color: white;
    outline: none;
  `,
  Btn: styled.button`
    text-align: center;
    display: block;
    width: 210px;
    padding: 2px;
    margin: 4.5rem auto 0;
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
  `,
  ErrorText: styled.span`
    color: darkred;
    font-size: 0.7em;
  `,
  DropdownItem: styled.div`
    padding: 0 20px;
    cursor: pointer;
    height: 50px;
    background: ${(props) => (props.active ? "rgb(195, 123, 80)" : "none")};
    border-bottom: 1px solid white;
    &:hover {
      background: rgb(195, 123, 80);
    }
  `,
};

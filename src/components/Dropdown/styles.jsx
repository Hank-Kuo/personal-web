import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    position: relative;
    display: flex;
    width: 100%;

    border: 1px solid white;
    border-color: ${(props) => (props.error ? "darkred" : "white")};
    font-size: 20px;
    background-color: #0a0809;
  `,
  Box: styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    color: white;
  `,
  Label: styled.label`
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
    background: transparent;
    border: 0;
    outline: none;
    color: white;
    height: ${(props) => (props.active ? "auto" : "0px")};
  `,
  Container: styled.div`
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    transform: translate(0px, 10px);
    background: rgb(152, 123, 108, 0.9);
    width: 100%;
    color: white;
    max-height: 250px;
    overflow: scroll;
    border: 1px solid;
  `,
  Item: styled.div`
    padding: 0 20px;
    cursor: pointer;
    height: 50px;
    background: ${(props) => (props.active ? "rgb(195, 123, 80)" : "none")};
    border-bottom: 1px solid white;
    &:hover {
      background: rgb(195, 123, 80);
    }
  `,
  TagBox: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  Tag: styled.span`
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
  `,
};

import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: ${(props) => (props.visible ? 'block' : 'none')};
    width: 250px;
    font-size: 0.56em;
    padding: 0.5em 0.2em;
    position: absolute;
    right: -25px;
    top: -47px;
    background-color: tan;
    border-radius: 4px;
    color: black;
    text-align: center;
    z-index: 1;
    cursor: default;
    &:after {
      border-width: 5px;
      border-style: solid;
      border-color: tan transparent transparent transparent;
      content: '';
      left: 80%;
      margin-left: -5px;
      position: absolute;
      top: 100%;
    }
  `,
  Img: styled.img`
    margin-left: ${(props) => (props.right ? '10px' : '0')};
    margin-right: ${(props) => (props.left ? '5px' : '0')};
  `,
};

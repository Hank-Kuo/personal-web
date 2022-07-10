import styled, { keyframes } from "styled-components";

const bounceInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(1000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    opacity: 1;
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    opacity: 1;
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
`;

const bounceOutRight = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    color: black;
    transform: translate3d(2000px, 0, 0);
  }
`;

export const S = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 45px auto;
    color: red;
    position: fixed;
    top: 35px;
    right: 5px;
    z-index: 10000;
    background: bisque;
    width: 320px;
    height: 80px;
    padding: 5px;
    border-radius: 10px;
    transform: translate3d(2000px, 0, 0);
    animation: ${(props) => {
    if (props.show) {
      return bounceInRight;
    }
    return props.close ? bounceOutRight : null;
  }}
      1.5s linear;
    animation-fill-mode: forwards;

    cursor: pointer;
  `,
  Icon: styled.img`
    height: 40px;
    margin: auto;
  `,
  Box: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    padding-bottom: 10px;
  `,
  Title: styled.span`
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
  `,
  Content: styled.span`
    font-size: 1rem;
    line-height: 1.2;
  `,
};

import styled from 'styled-components';

import { device } from '../../core/constants/styles';

export const S = {
  Wrapper: styled.div`
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow: scroll;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  ModalGrey: styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  Container: styled.div`
    max-width: 100%;
    max-height: 100%;
    z-index: 2001;
    margin: 0 auto;
    display: table;
    box-sizing: border-box;
    -webkit-animation: FadeIn 350ms linear;
    -moz-animation: FadeIn 350ms linear;
    animation: FadeIn 350ms linear;
    -webkit-animation-name: FadeIn;
    -moz-animation-name: FadeIn;
    animation-name: FadeIn;

    @media ${device.XS} {
      width: 100%;
      height: 100%;
      display: flex;
    }

    @-webkit-keyframes FadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-moz-keyframes FadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-o-keyframes FadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes FadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,
  Inner: styled.div``,
};

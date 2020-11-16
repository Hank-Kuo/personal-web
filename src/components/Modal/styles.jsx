import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
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
    align-items: center;
    display: flex;
    background: #ffffff 0% 0% no-repeat padding-box;
    margin: ${(props) => props.margin};
    border-radius: 12px;
    z-index: 2001;
    box-sizing: border-box;
    box-shadow: 0px 3px 6px #00000029;
    -webkit-animation: FadeIn 350ms linear;
    -moz-animation: FadeIn 350ms linear;
    animation: FadeIn 350ms linear;
    -webkit-animation-name: FadeIn;
    -moz-animation-name: FadeIn;
    animation-name: FadeIn;

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
};

import styled from "styled-components";

export const Cube = styled.div`
  -webkit-transform-origin: 48px 48px -48px;
  transform-origin: 48px 48px -48px;
  position: relative;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease-out;
  transition: all 300ms ease-out;

  & div {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${(props) => props.abbreColor};
  }

  & div:nth-child(1) {
    -webkit-transform-origin: center top;
    transform-origin: center top;
    -webkit-transform: rotateX(90deg) translateY(-96px);
    transform: rotateX(90deg) translateY(-96px);
  }
  & div:nth-child(2) {
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform: rotateX(-90deg) translateY(96px);
    transform: rotateX(-90deg) translateY(96px);
  }
  & div:nth-child(3) {
    -webkit-transform-origin: left center;
    transform-origin: left center;
    -webkit-transform: rotateY(-90deg) translateX(-96px);
    transform: rotateY(-90deg) translateX(-96px);
  }
  & div:nth-child(4) {
    -webkit-transform-origin: right center;
    transform-origin: right center;
    -webkit-transform: rotateY(90deg) translateX(96px);
    transform: rotateY(90deg) translateX(96px);
  }
  & div:nth-child(5) {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  & div:nth-child(6) {
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: rotateY(180deg) translateZ(96px);
    transform: rotateY(180deg) translateZ(96px);
  }
  & div:nth-child(1) {
    background: ${(props) => props.colo1};
  }
  & div:nth-child(2) {
    background: ${(props) => props.color2};
  }
  & div:nth-child(3) {
    background: ${(props) => props.color3};
  }
  & div:nth-child(4) {
    background: ${(props) => props.color4};
  }
  & div:nth-child(5) {
    background: ${(props) => props.color5};
    font: 700 34px/1.3 "Poppins", sans-serif;
  }
  & div:nth-child(6) {
    background: ${(props) => props.color6};
    color: ${(props) => props.textColor};
    font: 700 1rem "Poppins", sans-serif;
    text-align: center;
  }
`;

export const C = {
  Link: styled.div`
    position: relative;
    width: 96px;
    height: 96px;

    & > * {
      transform-style: preserve-3d;
    }

    & span {
      -webkit-transform-origin: 48px 48px -48px;
      transform-origin: 48px 48px -48px;
      display: block;
      position: absolute;
      z-index: 1;
      -webkit-transform: translateZ(24px);
      transform: translateZ(24px);
      width: 100%;
      height: 100%;
    }
    & span:nth-child(1) {
      top: 0;
      left: 0;
      height: 50%;
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
    }

    & span:nth-child(1):hover ~ ${Cube}, & span:nth-child(1):focus ~ ${Cube} {
      -webkit-transform: rotateX(-0.5turn);
      transform: rotateX(-0.5turn);
    }
    & span:nth-child(1):hover ~ ${Cube} div:nth-child(6),
    & span:nth-child(1):focus ~ ${Cube} div:nth-child(6) {
      -webkit-transform: rotateY(180deg) rotateZ(180deg) translateZ(96px);
      transform: rotateY(180deg) rotateZ(180deg) translateZ(96px);
    }
    & span:nth-child(2) {
      top: 0;
      right: 0;
      width: 50%;
      -webkit-clip-path: polygon(100% 100%, 0 50%, 100% 0);
      clip-path: polygon(100% 100%, 0 50%, 100% 0);
    }

    & span:nth-child(2):hover ~ ${Cube}, & span:nth-child(2):focus ~ ${Cube} {
      -webkit-transform: rotateY(-0.5turn);
      transform: rotateY(-0.5turn);
    }
    & span:nth-child(3) {
      bottom: 0;
      right: 0;
      height: 50%;
      -webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
      clip-path: polygon(0 100%, 50% 0, 100% 100%);
    }

    & span:nth-child(3):hover ~ ${Cube}, & span:nth-child(3):focus ~ ${Cube} {
      -webkit-transform: rotateX(0.5turn);
      transform: rotateX(0.5turn);
    }
    & span:nth-child(3):hover ~ ${Cube} div:nth-child(6),
    & span:nth-child(3):focus ~ ${Cube} div:nth-child(6) {
      -webkit-transform: rotateY(180deg) rotateZ(180deg) translateZ(96px);
      transform: rotateY(180deg) rotateZ(180deg) translateZ(96px);
    }
    & span:nth-child(4) {
      bottom: 0;
      left: 0;
      width: 50%;
      -webkit-clip-path: polygon(0 100%, 0 0, 100% 50%);
      clip-path: polygon(0 100%, 0 0, 100% 50%);
    }

    & span:nth-child(4):hover ~ ${Cube}, & span:nth-child(4):focus ~ ${Cube} {
      -webkit-transform: rotateY(0.5turn);
      transform: rotateY(0.5turn);
    }
    & span:nth-child(1):hover,
    & span:nth-child(1):focus,
    & span:nth-child(2):hover,
    & span:nth-child(2):focus,
    & span:nth-child(3):hover,
    & span:nth-child(3):focus,
    & span:nth-child(4):hover,
    & span:nth-child(4):focus {
      z-index: 2;
      -webkit-transform: translateZ(36px);
      transform: translateZ(36px);
      width: 100% !important;
      height: 100% !important;
      -webkit-clip-path: none !important;
      clip-path: none !important;
      -webkit-transition: all 100ms ease 500ms;
      transition: all 100ms ease 500ms;
    }
  `,
  Span: styled.span``,

  Div: styled.div``,
};

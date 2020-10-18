import styled from 'styled-components';

import { device } from '../../core/constants/styles';

export const S = {
  Wrapper: styled.div`
    @media ${device.XS} {
      margin-top: 7rem;
      margin-bottom: 4rem;
    }
    @media ${device.S} {
      margin: 7rem;
    }
    @media ${device.M} {
      margin: 7rem;
    }
    @media ${device.L} {
      margin: 7rem;
    }
  `,
  Title: styled.h1`
    text-align: center;
    font-family: 'Fredoka One', cursive;
    font-size: 5rem;
    font-weight: bold;
    color: snow;

  `,
  Container: styled.div`
    position: relative;
    width: auto;
    flex-grow: 1;
    margin: 0 auto;

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
  ContainerBox: styled.div`
    display: flex;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    :last-child {
      margin-bottom: -0.75rem;
    }
  `,
  Box: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * + * {
      flex: 1 0 61%;
      margin-top: 20px
    }

    div:first-child {
      margin-top: 20px;
      flex: 1 0 61%;
    }
    @media (max-width: 825px) {
      justify-content: center;
    }
    @media ${device.L} {
      justify-content: space-between;
    }
  `,
};

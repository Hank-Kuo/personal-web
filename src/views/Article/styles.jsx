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
};

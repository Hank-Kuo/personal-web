import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    
    @media screen and (min-width: 1200px) {
      margin: 7rem;
    }
    @media screen and (min-width: 992px) {
      margin: 7rem 10rem;
    }
    @media screen and (min-width: 768px) {
      margin: 7rem;
    }
  `,
  Title: styled.h1``,
  Container: styled.div`
    @media screen and (min-width: 1200px) {
      max-width: 1170px;
    }
    @media screen and (min-width: 992px) {
      max-width: 970;
    }
    @media screen and (min-width: 768px) {
      max-width: 750;
    }
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
  `,
  ContainerBox: styled.div`
    display: flex;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    flex-wrap: wrap;
    :last-child {
      margin-bottom: -0.75rem;
    }
  `,
  Box: styled.div`
    flex: none;
    width: 33.33333%;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 100px;
  `,
};

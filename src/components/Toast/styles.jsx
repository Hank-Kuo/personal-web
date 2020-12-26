import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 45px auto;
    color: red;
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

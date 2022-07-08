import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
from{
transform:rotate(0deg)
}
to{
transform:rotate(360deg)
}`;
export const S = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    align-items: center;
    justify-content: center;
  `,
  Spinner: styled.div`
    border: 5px solid #0a0809;
    width: 5rem;
    height: 5rem;
    border-top-color: #ebc785;
    border-radius: 50%;
    animation: ${spinner} 1s linear 0s infinite;
  `,
};

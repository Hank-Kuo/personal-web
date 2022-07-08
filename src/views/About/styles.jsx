import styled, { keyframes } from 'styled-components';

import { device } from '../../core/constants/styles';

const skillbarKeyframe = keyframes`
    0% {
      width: 0%;
      &:before {
        content: 0'';
      }
    }
    100% {
      width: 50%;
      &:before {
        content: 50'';
      }
    }
`;

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
  `,
  Box: styled.div`
    @media ${device.MS} {
      > * + * {
        margin-top: 60px;
      }
    }
    @media ${device.S} {
      > * + * {
        margin-top: 100px;
      }
    }
  `,
  HeaderSection: styled.section``,
  HeaderBox: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h1`
    color: white;
    text-align: left;
    font-family: 'Fredoka One', cursive;
    @media ${device.XM} {
      text-align: center;
    }
    @media${device.M} {
      text-align: left;
    }
  `,
  SubTitle: styled.p`
    font-family: 'Dancing Script', cursive;
    color: white;
    @media ${device.XM} {
      font-size: 1.5rem;
    }
    @media ${device.M} {
      font-size: 1.25rem;
    }
    @media ${device.L} {
      font-size: 1.5rem;
    }
  `,
  SelfieBox: styled.div`
    align-self: center !important;
    flex: 0 0 41.66667%;
  `,
  SelfieImg: styled.img`
    border-radius: 50% !important;
    border-color: #6c757d !important;
    border: 1px solid #dee2e6 !important;
  `,
  AboutMeBox: styled.div`
    @media ${device.XM} {
      margin-top: 80px;
    }
    @media ${device.L} {
      margin-top: 80px;
      flex: 0 0 90%;
    }
    @media ${device.XL} {
      margin-top: 0px;
      flex: 0 0 58.33333%;
    }
  `,
  BtnList: styled.div`
    display: flex;
    > * + * {
      margin-left: 2rem;
    }

    @media ${device.XS} {
      display: block;
      > * + * {
        margin-left: 0;
        margin-top: 40px;
      }
    }
    @media ${device.S} {
      display: flex;
      > * + * {
        margin-left: 2rem;
      }
    }
  `,
  ResumeBtn: styled.a`
    display: block;
    width: 210px;
    padding: 2px;
    color: #fff;
    letter-spacing: 0.25rem;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    background: 0 0 !important;
    border: 0.2rem solid #fff;
    font-family: montserrat-semibold, sans-serif;
    cursor: pointer;
    text-align: center;
    text-decoration: none !important;
    :hover {
      background: white !important;
      color: #000000;
    }
    @media ${device.XS} {
      margin-top: 40px;
      width: 100%;
    }
    @media ${device.S} {
      width: 100%;
    }
    @media ${device.M} {
      width: 210px;
    }
  `,

  ProfileSection: styled.section``,
  ProfileBox: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    color: #edecee;
    gap: 2rem;
    margin-left: 5%;
  `,
  ProfileRightBox: styled.div``,
  ProfileLeftBox: styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 15rem 16rem;
    @media ${device.XS} {
      grid-template-columns: max-content;
      p:nth-child(2n) {
        padding-left: 10px;
      }
    }
    @media ${device.S} {
      grid-template-columns: 15rem 16rem;
    }
    @media ${device.L} {
      grid-template-columns: 20rem 16rem;
    }
    @media ${device.XL} {
      grid-template-columns: 15rem 16rem;
    }
  `,
  Splitter: styled.hr`
    background: white;
  `,
  ProfileTitle: styled.h1``,
  ProfileSubTitle: styled.p`
    font-family: 'Fredoka One', cursive;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  `,
  ProfileText: styled.p`
    margin: 0;
    font-size: 17px;
  `,
  Progressbar: styled.div`
    > * + * {
      margin-left: 0.31em;
    }
    opacity: 0.5;
    &:hover {
      opacity: 1;
      span {
        color: #f6b674;
      }
    }
  `,
  Progressball: styled.span`
    background: ${(props) => (props.active ? '#faa54c' : 'none')};
    border-color: #cc7214;
    width: 0.6em;
    height: 0.7em;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    display: inline-block;
    vertical-align: middle;
  `,
  ProgressText: styled.span`
    margin-left: 50px;
    font-size: 21.5px;
    @media ${device.XS} {
      display: none;
    }
    @media ${device.S} {
      display: initial;
    }
  `,
  ExperienceSection: styled.section``,
  ExperienceBox: styled.div`
    padding: 1rem;
    color: #edecee;
  `,
  ExperienceTitle: styled.h1``,
  SkillSection: styled.section``,
  SkillBox: styled.div`
    display: grid;
    padding: 1.5rem 2.5rem;
    justify-content: center;
    grid-row-gap: 35px;
    @media ${device.XS} {
      padding: 1.5rem 1.5rem;
      grid-template-columns: 1fr 1fr;
    }
    @media ${device.S} {
      padding: 1.5rem 2.5rem;
    }
    @media ${device.M} {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${device.L} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media ${device.XL} {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  `,
  SkillTitle: styled.h1``,
  EducationSection: styled.section``,
  EducationBox: styled.div`
    padding: 1rem;
    color: #edecee;
    > * + * {
      margin-top: 3rem;
    }
  `,
  EducationImg: styled.img`
    border-radius: 50% !important;
    border-color: #6c757d !important;
    border: 1px solid #dee2e6 !important;
    width: 150px;
    height: 150px;
  `,
  EducationContent: styled.div`
    @media ${device.XS} {
      margin-top: 30px;
    }
    @media ${device.S} {
      margin-left: 3.5rem;
      margin-top: 0px;
    }
  `,
  EducationInnerBox: styled.div`
    display: flex;
    align-items: center;
    @media ${device.XS} {
      flex-direction: column;
    }
    @media ${device.S} {
      display: flex;
      flex-direction: row;
    }
  `,
  EducationInnerContent: styled.div`
    padding: 1rem;
  `,
  EducationTitle: styled.p`
    font-family: 'Fredoka One', cursive;
    font-weight: Bold;
    margin: 0;
    @media ${device.XM} {
      font-size: 1.3rem;
      margin-top: ;
    }
    @media ${device.M} {
      font-size: 1.6rem;
    }
  `,
  EducationText: styled.p`
    margin: 0;
    font-size: 1.1rem;
  `,
  TimeLineBox: styled.ul`
    font-family: 'Roboto', sans-serif;
    line-height: 1.4em;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    > * + * {
      margin-top: 13px;
    }
  `,
  TimeLineItem: styled.li`
    position: relative;
    display: flex;
    padding: 0;
  `,
  TimeLineDate: styled.span`
    width: max-content;
    padding-right: 30px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0 0 3px 0;
    text-transform: uppercase;
    color: ${(props) => (props.hover ? '#6fb5c3' : '')};
  `,
  TimeLineHeader: styled.div`
    display: flex;
    @media ${device.XM} {
      display: none;
    }
    @media ${device.M} {
      display: flex;
      width: 155px;
    }
  `,
  TimeLineMark: styled.div`
    position: relative;
    &:before {
      background: ${(props) => (props.hover ? 'transparent' : '#317f8f')};
      border: ${(props) =>
        props.hover ? '3px solid #317f8f' : '3px solid transparent'};
      border-radius: 100%;
      content: '';
      display: block;
      height: 9px;
      position: relative;
      top: 1px;
      left: 3px;
      width: 9px;
      transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
    }
    &:after {
      content: '';
      width: 3px;
      background: #ccd5db;
      display: block;
      position: relative;
      top: 3px;
      bottom: 0;
      left: 6px;
      height: 100%;
    }
  `,
  TimeLineContent: styled.div`
    padding: 0 0 4px 20px;
    margin-bottom: 5px;
    border-bottom: 0px solid #ccd5db;
    line-height: 1.4;
    @media ${device.XM} {
      padding: 0;
    }
    @media ${device.M} {
      padding: 0 0 4px 20px;
    }
  `,
  TimeLineTitle: styled.p`
    font-family: 'Fredoka One', cursive;
    margin: 0;
    font-weight: bold;
    color: ${(props) => (props.hover ? '#6fb5c3' : '')};
    @media ${device.XS} {
      font-size: 1.3rem;
    }
    @media ${device.S} {
      font-size: 1.6rem;
    }
  `,
  TimeLinePosition: styled.p`
    margin: 0;
    font-size: 1.05rem;
  `,
  TimeLineInfo: styled.small`
    margin: 0;
    font-size: 1.05rem;
  `,
  TimeLineInnerBox: styled.div`
    padding: 1.5rem;
  `,
};

export const C = {
  skill: styled.div`
    width: 100%;
    max-width: 600px;
    padding: 0 20px;
  `,
  skillName: styled.div`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 20px 0;
  `,
  skillbar: styled.div`
    height: 20px;
    background: #cacaca;
    border-radius: 8px;
  `,
  skillPer: styled.div`
    height: 20px;
    background-color: #f05a48;
    border-radius: 8px;
    position: relative;
    transition: 1s linear;
    animation: ${skillbarKeyframe} 2s linear forwards;

    &:before {
      content: '11 %';
      position: absolute;
      padding: 4px 6px;
      background-color: white;
      color: black;
      font-size: 12px;
      border-radius: 4px;
      top: -35px;
      right: 0;
      transform: translateX(50%);
    }
    &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: white;
      top: -16px;
      right: 0;
      transform: translateX(50%) rotate(45deg);
      border-radius: 2px;
    }
  `,
};

export const T = {
  TimeLineBox: styled.ul`
    font-family: 'Roboto', sans-serif;
    line-height: 1.4em;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    > * + * {
      margin-top: 13px;
    }
  `,
  TimeLineItem: styled.li`
    position: relative;
    display: flex;
    padding: 0;
  `,
  TimeLineDate: styled.span`
    width: 150px;
    padding-right: 30px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0 0 3px 0;
    text-transform: uppercase;
    color: ${(props) => (props.hover ? '#6fb5c3' : '')};
  `,
  TimeLineHeader: styled.div`
    display: flex;
    @media ${device.XM} {
      display: none;
    }
    @media ${device.M} {
      display: flex;
      
    }
  `,
  TimeLineMark: styled.div`
    position: relative;
    &:before {
      background: ${(props) => (props.hover ? 'transparent' : '#317f8f')};
      border: ${(props) =>
        props.hover ? '3px solid #317f8f' : '3px solid transparent'};
      border-radius: 100%;
      content: '';
      display: block;
      height: 9px;
      position: relative;
     
      top: 9px;
      left: 2.5px;
      width: 9px;
      transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
    }
    &:after {
      content: '';
      width: 3px;
      background: #ccd5db;
      display: block;
      position: relative;
      top: 10px;
      bottom: 0;
      left: 6px;
      height:  calc(100% + 1px);
    }
  `,
  TimeLineContent: styled.div`
    padding: 0 0 4px 20px;
    margin-bottom: 5px;
    border-bottom: 0px solid #ccd5db;
    line-height: 1.4;
    @media ${device.XM} {
      padding: 0;
    }
    @media ${device.M} {
      padding: 0 0 4px 20px;
    }
  `,
  TimeLineTitle: styled.p`
    font-family: 'Fredoka One', cursive;
    margin: 0;
    font-weight: bold;
    color: ${(props) => (props.hover ? '#6fb5c3' : '')};
    @media ${device.XS} {
      font-size: 1.3rem;
    }
    @media ${device.S} {
      font-size: 1.6rem;
    }
  `,
  TimeLinePosition: styled.p`
    margin: 0 0 0.5em 0;
    font-size: 1.05rem;
  `,
  TimeLineDate1: styled.p`
    font-size: 1.05rem;
    margin: 0 0 0.5em 0;
    @media ${device.XM} {
      display: block;
    }
    @media ${device.M} {
      display: none;
    }
  `,
  TimeLineBold: styled.span`
    font-weight: bold;
  `,
  TimeLineInfo: styled.small`
    margin: 0;
    font-size: 1.05rem;
  `,
  TimeLineInnerBox: styled.div`
    padding: 1.5rem;
  `,
};

export const P = {};

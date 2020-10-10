import styled, { keyframes, css } from 'styled-components';

const a = keyframes`
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

const n = css`
  &:hover {
    color: #6fb5c3;
    &:before {
      background: transparent;
      border: 3px solid #317f8f;
    }
  }
`;

export const S = {
  Wrapper: styled.div`
    margin: 10rem;
  `,
  HeaderSection: styled.section``,
  HeaderBox: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  `,
  Title: styled.h1`
    color: white;
  `,
  SubTitle: styled.p`
    color: white;
    font-size: 1.25rem;
  `,
  SelfieBox: styled.div`
    align-self: center !important;
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  `,
  SelfieImg: styled.img`
    border-radius: 50% !important;
    border-color: #6c757d !important;
    border: 1px solid #dee2e6 !important;
  `,
  AboutMeBox: styled.div`
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  `,
  BtnList: styled.div`
    > * + * {
      margin-left: 2rem;
    }
  `,
  ResumeBtn: styled.a``,
  ProfileSection: styled.section``,
  ProfileBox: styled.div`
    display: flex;
    padding: 1rem;
    color: #edecee;
  `,
  ProfileRightBox: styled.div`
    width: 50%;
  `,
  ProfileLeftBox: styled.div`
    width: 50%;
    display: grid;
    align-items: center;
    grid-template-columns: 15rem 16rem;
  `,
  Splitter: styled.hr``,
  ProfileTitle: styled.h1``,
  ProfileSubTitle: styled.p`
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
    grid-template-columns: repeat(9, 120px);
    grid-template-rows: repeat(4, 120px);
    justify-content: center;
    padding: 1rem;
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
    margin-left: 3.5rem;
  `,
  EducationInnerBox: styled.div`
    display: flex;
    align-items: center;
  `,
  EducationInnerContent: styled.div`
    padding: 1rem;
  `,
  EducationTitle: styled.p`
    font-weight: Bold;
    margin: 0;
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
    display: grid;
    grid-template-columns: 12rem 52rem;
    padding: 0;
  `,
  TimeLineDate: styled.p`
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
  `,
  TimeLineMark: styled.div`
    position: relative;
    &:before {
      background: ${(props) => (props.hover ? 'transparent' : '#317f8f')};
      
      border: ${(props) => (props.hover ? '3px solid #317f8f' : '3px solid transparent')}; 
      border-radius: 100%;
      content: '';
      display: block;
      height: 9px;
      position: relative;
      top: 3px;
      left: 0;
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
  `,
  TimeLineTitle: styled.p`
    margin: 0;
    font-weight: bold;
    color: ${(props) => (props.hover ? '#6fb5c3' : '')};
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
  CertificationSection: styled.section``,
  CertificationTitle: styled.h1``,
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
  //animation: ${a} 2s linear forwards;
  // width: ${(props) => props.per}%;
  // transition: 0.5s linear;
  skillPer: styled.div`
    height: 20px;
    background-color: #f05a48;
    border-radius: 8px;
    position: relative;
    transition: 1s linear;
    animation: ${a} 2s linear forwards;

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

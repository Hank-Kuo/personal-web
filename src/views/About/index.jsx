import React, { Component } from 'react';
import Cube from '../../components/Cube';

import { S, T, C } from './styles';

import SelfieIMG from '../../assets/images/IMG_4384_1.png';
import NTUSTIMG from '../../assets/images/TaiwanTech_Logo.png';
import FJUIMG from '../../assets/images/FJU_Logo.png';

import DATA from '../../data';
import Progress from '../../core/hoc/progress';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLineCss: -1,
    };
  }
  handleHover = (e) => {
    const id = e.target.id;
    this.setState(() => ({ timeLineCss: id }));
  };
  handleOutHover = () => {
    this.setState(() => ({ timeLineCss: -1 }));
  };

  renderProgressbar = (name, step, label) => {
    var activeBall = [];
    var inactiveBall = [];
    for (var i = 0; i < step; i++) {
      activeBall.push(<S.Progressball active key={i} />);
    }
    for (var j = 0; j < 10 - step; j++) {
      inactiveBall.push(<S.Progressball key={j} />);
    }
    return (
      <>
        <S.ProfileSubTitle>{name}</S.ProfileSubTitle>
        <S.Progressbar>
          {activeBall}
          {inactiveBall}
          <S.ProgressText>{label}</S.ProgressText>
        </S.Progressbar>
      </>
    );
  };

  renderTimeLine = () => {
    return (
      <T.TimeLineBox>
        {DATA.experiences.map((values, key) => {
          return (
            <T.TimeLineItem>
              <T.TimeLineHeader>
                <T.TimeLineDate
                  id={key}
                  onMouseOver={this.handleHover}
                  onMouseOut={this.handleOutHover}
                  hover={this.state.timeLineCss === key}
                >
                  {values.time}
                </T.TimeLineDate>
                <T.TimeLineMark
                  id={key}
                  onMouseOver={this.handleHover}
                  onMouseOut={this.handleOutHover}
                  hover={this.state.timeLineCss === key}
                />
              </T.TimeLineHeader>
              <T.TimeLineContent>
                <T.TimeLineTitle
                  id={key}
                  onMouseOver={this.handleHover}
                  onMouseOut={this.handleOutHover}
                  hover={this.state.timeLineCss === key}
                >
                  {values.name}
                </T.TimeLineTitle>
                <T.TimeLineInnerBox>
                  <T.TimeLineDate1>
                    <T.TimeLineBold>時間: </T.TimeLineBold>
                    {values.time}
                  </T.TimeLineDate1>
                  <T.TimeLinePosition>
                    <T.TimeLineBold>職位: </T.TimeLineBold>
                    {values.position}
                  </T.TimeLinePosition>
                  <T.TimeLineInfo>
                    <T.TimeLineBold>內容: </T.TimeLineBold> {values.content}
                  </T.TimeLineInfo>
                </T.TimeLineInnerBox>
              </T.TimeLineContent>
            </T.TimeLineItem>
          );
        })}
      </T.TimeLineBox>
    );
  };

  render() {
    return (
      <S.Wrapper>
        <S.Box>
          <S.HeaderSection>
            <S.HeaderBox>
              <S.SelfieBox>
                <S.SelfieImg src={SelfieIMG} alt="" />
              </S.SelfieBox>
              <S.AboutMeBox>
                <S.Title>ABOUT ME</S.Title>
                <S.SubTitle>
                  My name is Zhen Yuan Kuo. Currently studying at National
                  Taiwan University of Science and Technology, Department of
                  information management master's program the first grade. I see
                  myself as a Machine Learning Engineer and Web Developer. In my
                  free time I like working on open source projects and learning
                  new things.
                </S.SubTitle>
                <S.BtnList>
                  <S.ResumeBtn>RESUME</S.ResumeBtn>
                  <S.ResumeBtn>履歷</S.ResumeBtn>
                </S.BtnList>
              </S.AboutMeBox>
            </S.HeaderBox>
          </S.HeaderSection>
          <S.ProfileSection>
            <S.Title>PROFILE</S.Title>
            <S.Splitter />
            <S.ProfileBox>
              <S.ProfileLeftBox>
                <S.ProfileSubTitle>FULLNAME</S.ProfileSubTitle>
                <S.ProfileText>郭鎮源 (Hank)</S.ProfileText>
                <S.ProfileSubTitle>MAJOR</S.ProfileSubTitle>
                <S.ProfileText>Information management</S.ProfileText>
                <S.ProfileSubTitle>EMAIL</S.ProfileSubTitle>
                <S.ProfileText>asdf024681029@gmail.com</S.ProfileText>
                <S.ProfileSubTitle>PROFESSION</S.ProfileSubTitle>
                <S.ProfileText>Student(Master degree)</S.ProfileText>
                <S.ProfileSubTitle>CURRENTLY CITY</S.ProfileSubTitle>
                <S.ProfileText>Taiwan</S.ProfileText>
              </S.ProfileLeftBox>
              <S.ProfileRightBox>
                {DATA.profile.languages.map((values) => {
                  return this.renderProgressbar(
                    values.name,
                    values.score,
                    values.level,
                  );
                })}
              </S.ProfileRightBox>
            </S.ProfileBox>
          </S.ProfileSection>
          <S.EducationSection>
            <S.Title>EDUCATIONS</S.Title>
            <S.Splitter />
            <S.EducationBox>
              <S.EducationInnerBox>
                <S.EducationImg src={NTUSTIMG} alt="" />
                <S.EducationContent>
                  <S.EducationTitle>
                    National Taiwan University of Science and Technology
                  </S.EducationTitle>
                  <S.EducationInnerContent>
                    <S.EducationText>Degree: Master</S.EducationText>
                    <S.EducationText>Year: 2020.9 - Now</S.EducationText>
                    <S.EducationText>
                      Major: Information Management
                    </S.EducationText>
                  </S.EducationInnerContent>
                </S.EducationContent>
              </S.EducationInnerBox>
              <S.EducationInnerBox>
                <S.EducationImg src={FJUIMG} alt="" />
                <S.EducationContent>
                  <S.EducationTitle>
                    Fu Jen Catholic University
                  </S.EducationTitle>
                  <S.EducationInnerContent>
                    <S.EducationText>Degree: Bachelor</S.EducationText>
                    <S.EducationText>Year: 2016.9 - 2020.6</S.EducationText>
                    <S.EducationText>
                      Major: Information Management
                    </S.EducationText>
                    <S.EducationText>Minor: French</S.EducationText>
                  </S.EducationInnerContent>
                </S.EducationContent>
              </S.EducationInnerBox>
            </S.EducationBox>
          </S.EducationSection>
          <S.ExperienceSection>
            <S.Title>EXPERIENCES</S.Title>
            <S.Splitter />
            <S.ExperienceBox>{this.renderTimeLine()}</S.ExperienceBox>
          </S.ExperienceSection>
          <S.SkillSection>
            <S.Title>SKILLS</S.Title>
            <S.Splitter />
            <S.SkillBox>
              {DATA.skills.map((values) => {
                return (
                  <Cube
                    key={values.name}
                    abbre={values.abbre}
                    text={values.name}
                    color1={values.color1}
                    color2={values.color2}
                    color3={values.color3}
                    color4={values.color4}
                    color5={values.color5}
                    color6={values.color6}
                    textColor={values.textColor}
                    abbreColor="white"
                  />
                );
              })}
            </S.SkillBox>
          </S.SkillSection>
        </S.Box>
      </S.Wrapper>
    );
  }
}

export default Progress(About);

/*
            <div>
            <C.skillName>HTML</C.skillName>
            <C.skillbar>
              <C.skillPer></C.skillPer>
            </C.skillbar>
          </div>
*/

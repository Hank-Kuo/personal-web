import React, { Component } from "react";
import Cube from "../../components/Cube";

import { S, T } from "./styles";

import DATA from "../../assets/data/personal";
import progress from "../../core/hoc/progress";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLineCss: -1,
    };
  }

  handleHover = (e) => {
    const { id } = e.target;
    this.setState(() => ({ timeLineCss: id }));
  };

  handleOutHover = () => {
    this.setState(() => ({ timeLineCss: -1 }));
  };

  renderProgressbar = (name, step, label) => {
    const activeBall = [];
    const inactiveBall = [];
    for (let i = 0; i < step; i += 1) {
      activeBall.push(<S.Progressball active key={i} />);
    }
    for (let j = 0; j < 10 - step; j += 1) {
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
    const { timeLineCss } = this.state;
    return (
      <T.TimeLineBox>
        {DATA.experiences.map((values, key) => (
          <T.TimeLineItem>
            <T.TimeLineHeader>
              <T.TimeLineDate
                id={key}
                onMouseOver={this.handleHover}
                onMouseOut={this.handleOutHover}
                hover={timeLineCss === key}
              >
                {values.time}
              </T.TimeLineDate>
              <T.TimeLineMark
                id={key}
                onMouseOver={this.handleHover}
                onMouseOut={this.handleOutHover}
                hover={timeLineCss === key}
              />
            </T.TimeLineHeader>
            <T.TimeLineContent>
              <T.TimeLineTitle
                id={key}
                onMouseOver={this.handleHover}
                onMouseOut={this.handleOutHover}
                hover={timeLineCss === key}
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
                  <T.TimeLineBold>內容: </T.TimeLineBold>
                  <p style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: values.content }} />
                </T.TimeLineInfo>
              </T.TimeLineInnerBox>
            </T.TimeLineContent>
          </T.TimeLineItem>
        ))}
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
                <S.SelfieImg src={DATA.profile.img} alt="" />
              </S.SelfieBox>
              <S.AboutMeBox>
                <S.Title>ABOUT ME</S.Title>
                <S.SubTitle>
                  My name is Zhen Yuan Kuo. Currently studying at National
                  Taiwan University of Science and Technology, Department of
                  information management master the second grade. My current
                  research eld is knowledge graph recommendation system ( Deep
                  learning NLP domain ). In the rest time, I usually do the some
                  own projects, I like working on open source projects and
                  learning new things.
                </S.SubTitle>
                <S.BtnList>
                  <S.ResumeBtn href={DATA.link.resume_en} target="_blank">
                    RESUME
                  </S.ResumeBtn>
                  <S.ResumeBtn href={DATA.link.resume_zh} target="_blank">
                    履歷
                  </S.ResumeBtn>
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
                <S.ProfileText>{DATA.profile.fullname}</S.ProfileText>
                <S.ProfileSubTitle>MAJOR</S.ProfileSubTitle>
                <S.ProfileText>{DATA.profile.major}</S.ProfileText>
                <S.ProfileSubTitle>EMAIL</S.ProfileSubTitle>
                <S.ProfileText>{DATA.profile.email}</S.ProfileText>
                <S.ProfileSubTitle>PROFESSION</S.ProfileSubTitle>
                <S.ProfileText>{DATA.profile.profession}</S.ProfileText>
                <S.ProfileSubTitle>CURRENTLY CITY</S.ProfileSubTitle>
                <S.ProfileText>{DATA.profile.currentlyCity}</S.ProfileText>
              </S.ProfileLeftBox>
              <S.ProfileRightBox>
                {DATA.profile.languages.map((values) => this.renderProgressbar(
                  values.name,
                  values.score,
                  values.level,
                ))}
              </S.ProfileRightBox>
            </S.ProfileBox>
          </S.ProfileSection>
          <S.EducationSection>
            <S.Title>EDUCATIONS</S.Title>
            <S.Splitter />
            <S.EducationBox>
              <S.EducationInnerBox>
                <S.EducationImg src={DATA.education.master.img} alt="" />
                <S.EducationContent>
                  <S.EducationTitle>
                    {DATA.education.master.college}
                  </S.EducationTitle>
                  <S.EducationInnerContent>
                    <S.EducationText>Degree: Master</S.EducationText>
                    <S.EducationText>
                      {`Year: ${DATA.education.master.years}`}
                    </S.EducationText>
                    <S.EducationText>
                      {`Major: ${DATA.education.master.major}`}
                    </S.EducationText>
                  </S.EducationInnerContent>
                </S.EducationContent>
              </S.EducationInnerBox>
              <S.EducationInnerBox>
                <S.EducationImg src={DATA.education.bachelor.img} alt="" />
                <S.EducationContent>
                  <S.EducationTitle>
                    {DATA.education.bachelor.college}
                  </S.EducationTitle>
                  <S.EducationInnerContent>
                    <S.EducationText>Degree: Bachelor</S.EducationText>
                    <S.EducationText>{`Year: ${DATA.education.bachelor.years}`}</S.EducationText>
                    <S.EducationText>
                      {`Major: ${DATA.education.bachelor.major}`}
                    </S.EducationText>
                    <S.EducationText>{`Minor: ${DATA.education.bachelor.minor}`}</S.EducationText>
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
              {DATA.skills.map((values) => (
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
              ))}
            </S.SkillBox>
          </S.SkillSection>
        </S.Box>
      </S.Wrapper>
    );
  }
}

export default progress(About);

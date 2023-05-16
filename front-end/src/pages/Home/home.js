import React from "react";
import NaviBar from "../../components/NaviBar";
import * as S from "./styles";
import { GlobalStyle } from "../../fonts/fonts";
import user_green from "../../imgs/user_green.png";
import user_blue from "../../imgs/user_blue.png";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const ProjectTarget = () => {
  const title = useScrollFadeIn("up", 1, 0);
  const questionItem = useScrollFadeIn("up", 1, 0);
  const answerItemStart = useScrollFadeIn("up", 1, 0);
  const answerItemMid = useScrollFadeIn("up", 1, 0);
  const answerItemEnd = useScrollFadeIn("up", 1, 0);
  return (
    <S.TargetContainer>
      <S.CommonTitle {...title}>
        <span style={{ color: "#69e4d3", fontSize: "37px" }}>우리는 </span>
        이런 서비스를 제공해요
      </S.CommonTitle>
      <S.questionContainer {...questionItem}>
        <S.profileImg src={user_green} />
        <S.speechBubble direction="left">
          {"netflow기반 이상 탐지에 대해서 소개해줘 🤔"}
        </S.speechBubble>
      </S.questionContainer>
    </S.TargetContainer>
  );
};
const ProjectIntro = () => {
  const title = useScrollFadeIn("up", 1, 0);
  const questionItem = useScrollFadeIn("up", 1, 0);
  const answerItemStart = useScrollFadeIn("up", 1, 0);
  const answerItemMid = useScrollFadeIn("up", 1, 0);

  return (
    <S.InfoContainer>
      <S.CommonTitle {...title}>
        <span style={{ color: "#69e4d3", fontSize: "37px" }}>39팀 </span>
        어떤 프로젝트를 만들었을까?
      </S.CommonTitle>
      <S.questionContainer {...questionItem}>
        <S.profileImg src={user_blue} />
        <S.speechBubble direction="left">
          {"어떤 프로젝트인지 궁금해요 🤔"}
        </S.speechBubble>
      </S.questionContainer>
      <S.answerContainer>
        <S.bubbleBox {...answerItemStart}>
          <S.speechBubble direction="right">
            {
              "저희 팀은 **국민대학교 내부 IP**를 클라이언트로 설정하여 \n 외부로부터 들어오는 공격을 탐지하는 기술을 개발하였습니다 🚀 \n \n해당 기술은 개발 단계에서 끝나는 것이 아닌, \n실제 **국민대학교** 관계자들이 본 기술을 쉽게 접근하고 사용할 수 있도록 \n서비스화하는 것을 목표로 합니다."
            }
          </S.speechBubble>
        </S.bubbleBox>
        <S.bubbleBox {...answerItemMid}>
          <S.speechBubble direction="right">
            {
              "더불어 해당 서비스 외에도 다양한 기능들을 추가하여 \n국민대학교 관계자에게 보안에 대한 관심을 높이고 중요성을 부각시키려고 합니다 😀"
            }
          </S.speechBubble>
        </S.bubbleBox>
      </S.answerContainer>
    </S.InfoContainer>
  );
};

function Home() {
  return (
    <S.BodyContainer>
      <NaviBar></NaviBar>
      <S.MainContainer>
        <GlobalStyle />
        <S.titleContainer>
          <S.subTitle>{`국민대학교를 위한 네트워크 이상탐지 기술 개발 및 서비스화`}</S.subTitle>
          <S.mainTitle>Search ip for the Kookmin of Everything</S.mainTitle>
          {/*<S.MapImg src={worldMap} />*/}
        </S.titleContainer>
        <ProjectIntro />
        <ProjectTarget />
      </S.MainContainer>
    </S.BodyContainer>
  );
}

export default Home;

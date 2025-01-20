import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  HeaderWrapper,
  Header, 
  SearchBar, 
  SearchInput, 
  Categories, 
  CategoryButton, 
  FAQSection, 
  Question, 
  Answer 
} from "../styles/HelpStyles";

const Help = () => {
  const navigate = useNavigate(); // useNavigate 초기화

  const faqs = [
    {
      question: "계정을 어떻게 생성하나요?",
      answer: "MATHQUEST 앱을 열고 안내를 따라 계정을 생성하세요. 계정 생성 및 유지에는 비용이 들지 않습니다.",
      isOpen: true,
    },
    {
        question: "MathQuest에서 로그아웃을 하면 학습 기록이 사라지나요?",
        answer: "아니요, 로그아웃을 해도 학습 기록은 계정에 안전하게 저장됩니다. 로그인하면 이전 데이터를 그대로 확인할 수 있습니다.",
        isOpen: false,
      },
      {
        question: "MathQuest 회원탈퇴를 진행하려면 어떻게 해야 하나요?",
        answer: "회원탈퇴는 설정 메뉴에서 가능합니다. '회원탈퇴' 버튼을 누르고 안내에 따라 진행하면 계정이 삭제됩니다. 삭제된 계정의 데이터는 복구가 불가능하니 신중히 결정해주세요.",
        isOpen: false,
      },
      {
        question: "오답 문제를 다시 풀고 싶어요.",
        answer: "‘오답노트’ 메뉴를 통해 이전에 틀린 문제를 확인하고 복습할 수 있습니다. 문제를 다시 풀어 학습 효과를 높이세요.",
        isOpen: false,
      },
      {
        question: "오답 문제를 잘못 풀었을 때 다시 복습할 수 있나요?",
        answer: "네, 복습 모드에서는 틀린 문제를 무한정 다시 풀어볼 수 있습니다. 정확히 풀면 해당 문제는 더 이상 오답노트에 표시되지 않습니다.",
        isOpen: false,
      },
      {
        question: "MathQuest 앱에서 첫 문제를 어떻게 시작하나요?",
        answer: "MathQuest 앱을 열고 '시작하기' 버튼을 누르면 첫 번째 문제를 풀기 시작할 수 있습니다.",
        isOpen: false,
      },
      {
        question: "매일 출석체크는 어떻게 하나요?",
        answer: "메인 화면에서 '출석체크' 버튼을 눌러 매일 출석을 기록할 수 있습니다. 연속 출석 시 보너스 포인트를 받을 수 있습니다.",
        isOpen: false,
      },
      {
        question: "학습 기록은 어디에서 확인할 수 있나요?",
        answer: "메인 화면 하단의 '내 기록' 탭에서 모든 학습 기록과 통계를 확인할 수 있습니다.",
        isOpen: false,
      },
      {
        question: "오답 문제를 다시 풀고 싶어요.",
        answer: "'내 기록'에서 오답노트를 열어 복습 모드로 오답 문제를 다시 풀어볼 수 있습니다.",
        isOpen: false,
      },
      {
        question: "문제를 풀다 중단하면 나중에 이어서 풀 수 있나요?",
        answer: "네, 문제를 중단하면 앱이 자동으로 저장하며, 다음 번에 앱을 열면 이어서 풀 수 있습니다.",
        isOpen: false,
      },
      {
        question: "레벨 업은 어떻게 하나요?",
        answer: "정확히 문제를 풀고 점수를 쌓으면 레벨이 올라갑니다. 난이도 높은 문제를 풀수록 더 많은 점수를 획득할 수 있습니다.",
        isOpen: false,
      },
      {
        question: "다른 사람들과 경쟁할 수 있나요?",
        answer: "리더보드 기능을 통해 다른 사용자와 점수를 비교하고 경쟁할 수 있습니다. 상위권에 오르면 보상이 주어집니다.",
        isOpen: false,
      },
      {
        question: "MathQuest에서 사용할 포인트는 어떻게 얻나요?",
        answer: "매일 출석체크, 문제 풀이, 도전 과제를 완료하면 포인트를 얻을 수 있습니다. 이 포인트로 힌트나 테마를 구매할 수 있습니다.",
        isOpen: false,
      },
      {
        question: "아이의 학습 진도를 부모가 확인할 수 있나요?",
        answer: "부모 계정을 연결하면 아이의 학습 진도와 통계를 실시간으로 확인할 수 있습니다.",
        isOpen: false,
      },
      {
        question: "문제를 풀 때 힌트는 어떻게 사용하나요?",
        answer: "문제 화면에서 '힌트' 버튼을 눌러 포인트를 사용해 도움을 받을 수 있습니다.",
        isOpen: false,
      },
  ];

  const [faqData, setFaqData] = React.useState(faqs);

  const toggleAnswer = (index) => {
    setFaqData((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
      )
    );
  };

  return (
    <Container>
    <HeaderWrapper>
      <Header>
        <button onClick={() => (navigate("/option"))}>
          &larr;
        </button>
        <h1>도움말</h1>
      </Header>
      <SearchBar>
        <SearchInput type="text" placeholder="키워드를 입력하세요" />
        <button>🔍</button>
      </SearchBar>
      <Categories>
        <CategoryButton color="#cce5ff">시작 방법</CategoryButton>
        <CategoryButton color="#e6ffcc">출석체크</CategoryButton>
        <CategoryButton color="#ffcccc">오답하기</CategoryButton>
      </Categories>
    </HeaderWrapper>
      <FAQSection>
        {faqData.map((faq, index) => (
          <div key={index}>
            <Question onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span>{faq.isOpen ? "-" : "+"}</span>
            </Question>
            {faq.isOpen && <Answer>{faq.answer}</Answer>}
          </div>
        ))}
      </FAQSection>
    </Container>
  );
};

export default Help;

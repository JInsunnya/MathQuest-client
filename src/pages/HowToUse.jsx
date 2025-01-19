import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/HowToUseStyles';
import Image1 from '../assets/images/textlogoblack.png';
import Image2 from '../assets/images/textlogoblack.png';
import Image3 from '../assets/images/textlogoblack.png';
import Image4 from '../assets/images/textlogoblack.png';

const HowToUse = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const pages = [
    {
      image: Image1,
      title: '효율적인 수학 학습',
      description: '수학 문제 풀이 과정을 간단하고 체계적으로 학습하세요.',
    },
    {
      image: Image2,
      title: '오답노트 활용',
      description: '오답노트를 통해 틀린 문제를 복습하고 학습의 효율성을 높이세요.',
    },
    {
      image: Image3,
      title: '난이도별 맞춤 학습',
      description: '난이도에 맞는 문제를 풀며 개인 맞춤형 학습을 진행하세요.',
    },
    {
      image: Image4,
      title: '간편하고 직관적인 사용 경험',
      description: '쉽고 직관적인 인터페이스로 더 나은 학습을 경험하세요.',
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startApp = () => {
    navigate('/option');
  };

  return (
    <S.IntroContainer>
      <S.Image src={pages[currentPage].image} alt={pages[currentPage].title} />
      <S.Title>{pages[currentPage].title}</S.Title>
      <S.Description>{pages[currentPage].description}</S.Description>
      <S.Indicator>
        {pages.map((_, index) => (
          <S.Circle key={index} active={index === currentPage} />
        ))}
      </S.Indicator>
      {currentPage < pages.length - 1 ? (
        <S.ArrowButton onClick={nextPage}>&rarr;</S.ArrowButton>
      ) : (
        <S.Button primary onClick={startApp}>
          확인
        </S.Button>
      )}
    </S.IntroContainer>
  );
};

export default HowToUse;

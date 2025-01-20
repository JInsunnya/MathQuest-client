import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../styles/HowToUseStyles'; 
import screen1 from '../assets/images/screen1.png';
import screen2 from '../assets/images/screen2.png';
import screen3 from '../assets/images/screen3.png';
import screen4 from '../assets/images/screen4.png';

const HowToUse = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate(); 

  const pages = [
    {
      image: screen1,
      title: '효율적인 수학 학습',
      description: '수학 문제 풀이 과정을 간단하고 체계적으로 학습하세요.',
      rounded: true,
    },
    {
      image: screen2,
      title: '오답노트 활용',
      description: '오답노트를 통해 틀린 문제를 복습하고 학습의 효율성을 높이세요.',
    },
    {
      image: screen3,
      title: '난이도별 맞춤 학습',
      description: '난이도에 맞는 문제를 풀며 개인 맞춤형 학습을 진행하세요.',
      rounded: true,
    },
    {
      image: screen4,
      title: '간편하고 직관적인 사용 경험',
      description: '쉽고 직관적인 인터페이스로 더 나은 학습을 경험하세요.',
      rounded: true,
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startApp = () => {
    navigate('/option'); // 옵션 페이지로 이동
  };

  return (
    <S.IntroContainer>
      <S.Image 
        src={pages[currentPage].image} 
        alt={pages[currentPage].title} 
        rounded={pages[currentPage].rounded}  // rounded 속성 전달
      />
      <S.Title>{pages[currentPage].title}</S.Title>
      <S.Description>{pages[currentPage].description}</S.Description>

      <S.Footer>
        <S.Indicator>
          {pages.map((_, index) => (
            <S.Circle key={index} active={index === currentPage} />
          ))}
        </S.Indicator>
        {currentPage < pages.length - 1 ? (
          <S.ArrowButton onClick={nextPage}>&rarr;</S.ArrowButton>
        ) : (
          <S.Button onClick={startApp}>시작</S.Button>
        )}
      </S.Footer>
    </S.IntroContainer>
  );
};

export default HowToUse;

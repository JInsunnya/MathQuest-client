import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  AppInfo,
  AppIcon,
  AppName,
  Rating,
  RatingStars,
  ReviewInput,
  Recommendation,
  SubmitButton,
} from "../styles/ReviewStyles";
import ImageLogo from '../assets/images/logo.png';

const Review = () => {
  const navigate = useNavigate();

  // 상태 관리: 별점과 리뷰 내용
  const [rating, setRating] = useState(0);  // 초기 별점은 0
  const [reviewText, setReviewText] = useState('');
  const [recommend, setRecommend] = useState('');

  // 별점 클릭 핸들러
  const handleRating = (index) => {
    setRating(index + 1);  // 클릭한 별의 번호를 상태로 설정
  };

  // 리뷰 텍스트 입력 핸들러
  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  // 추천 여부 변경 핸들러
  const handleRecommendation = (event) => {
    setRecommend(event.target.value);
  };

  // 제출 핸들러
  const handleSubmit = () => {
    console.log({
      rating,
      reviewText,
      recommend,
    });
    // 서버에 데이터 전송 또는 다른 작업 추가
    navigate('/thank-you');  // 예시로 thank-you 페이지로 이동
  };

  return (
    <Container>
      <Header>
        <button onClick={() => navigate("/option")}>
          &larr;
        </button>
        <h1>리뷰하기</h1>
      </Header>
      <AppInfo>
        <img src={ImageLogo} alt="App Logo" />
        <AppName>
          <h2>MATHQUEST</h2>
          <p>평가하기</p>
        </AppName>
        <Rating>
          <RatingStars>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleRating(index)}
                style={{ color: index < rating ? '#FFD700' : '#ddd', cursor: 'pointer' }}
              >
                ★
              </span>
            ))}
          </RatingStars>
        </Rating>
      </AppInfo>
      <ReviewInput>
        <label htmlFor="review">리뷰를 작성해주세요!</label>
        <textarea
          id="review"
          value={reviewText}
          onChange={handleReviewChange}
          placeholder="리뷰를 작성해주세요..."
        />
      </ReviewInput>
      <Recommendation>
        <p>MATHQUEST를 추천하시겠습니까?</p>
        <label>
          <input
            type="radio"
            name="recommend"
            value="yes"
            onChange={handleRecommendation}
            checked={recommend === 'yes'}
          />
          네
        </label>
        <label>
          <input
            type="radio"
            name="recommend"
            value="no"
            onChange={handleRecommendation}
            checked={recommend === 'no'}
          />
          아니요
        </label>
      </Recommendation>
      <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
    </Container>
  );
};

export default Review;

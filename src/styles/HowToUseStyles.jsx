import styled from 'styled-components';

export const IntroContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F2F6FC;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Image = styled.img`
  width: 60%;
  max-width: 300px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 20px 0 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 20px;
`;

// 하단 고정을 위한 스타일링
export const Footer = styled.div`
  position: absolute; /* 부모 컨테이너 기준 */
  bottom: 20px; /* 하단에서 20px 간격 */
  width: 100%; /* 컨테이너 전체 너비 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Circle = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 10px;
  background-color: ${({ active }) => (active ? '#376AED' : '#ccc')};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #376AED;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e56b8;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#376AED' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#376AED')};
  padding: 15px 20px; /* 사각형 형태를 위한 여백 */
  border: ${(props) => (props.primary ? 'none' : '1px solid #376AED')};
  border-radius: 5px; /* 둥근 모서리를 최소화 */
  cursor: pointer;
  font-size: 1rem;
  width: 100px; /* 버튼 너비 */
  height: 50px; /* 버튼 높이 */
  margin: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#2e56b8' : '#f0f0f0')};
  }
`;



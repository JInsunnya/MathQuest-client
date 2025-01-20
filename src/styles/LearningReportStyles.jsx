import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
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

export const Header = styled.div`
  position: fixed;
  top: 0;  /* 상단 고정 */
  margin: 0 auto;
  height: 40px;
  width: 100%; /* 컨테이너 박스의 너비를 따름 */
  max-width: 353px; /* 컨테이너와 동일한 최대 너비 */
  background-color: #376AED; 
  z-index: 1000;
  color: #333;  // 글자 색상
  padding: 20px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); 
    
  img {
    max-width: 150px;
    display: flex;
    justify-content: left;
    margin-top: 10px;
  }


`;



export const h1 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

// 그래프 영역
export const ChartWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  canvas {
    max-width: 100%;
  }
`;

// 코멘트 영역
export const CommentSection = styled.div`
  width: 80%;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// 코멘트 제목
export const CommentTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #5f4b8b;
  margin-bottom: 10px;
`;

// 코멘트 텍스트
export const CommentText = styled.p`
  font-size: 1rem;
  color: #555;
`;

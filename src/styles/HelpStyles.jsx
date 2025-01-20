import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f5f5f5;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* 수정: 헤더와 FAQ 영역을 상단으로 정렬 */
    text-align: center;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 393px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000;
  border-bottom: 1px solid #ddd;
  padding: 10px 0; /* 추가: 상하 여백 */
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute;
    left: 10px; /* 수정: 왼쪽 여백 조정 */
    top: 50%;
    transform: translateY(-50%);
    padding: 5px 10px; /* 추가: 버튼 크기 조정 */
  }

  h1 {
    font-size: 1.4rem; /* 수정: 글꼴 크기 조정 */
    color: #333;
    margin: 0 auto;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  margin-top: 60px; /* 헤더 아래 여백 추가 */
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%; /* 추가: 가로 크기 100% */
`;

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px; /* 수정: 최대 너비 지정 */
  height: auto; /* 높이 자동 조정 */
  gap: 10px; /* 버튼 사이 간격 */
`;

export const CategoryButton = styled.button`
  flex: 1;
  background-color: ${(props) => props.color};
  border: none;
  padding: 10px 15px; /* 수정: 버튼 패딩 조정 */
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;

export const FAQSection = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%; /* 수정: 전체 크기 조정 */
  max-width: 350px;
  margin-top: 260px;

  /* 스크롤 추가 */
  max-height: 60vh; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */

  /* 스크롤바 스타일 */
  scrollbar-width: thin;
  scrollbar-color: #ccc #f5f5f5;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  span {
    font-size: 1.2rem;
    color: #999;
  }

  &:hover {
    color: #007bff; /* 추가: 호버 시 색상 변경 */
  }
`;

export const Answer = styled.div`
  padding: 10px 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4; /* 추가: 가독성을 위한 줄 간격 */
  border-top: 1px solid #eee; /* 추가: 구분선 */
`;

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
    justify-content: center;
    text-align: center;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

export const SubHeader = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;  /* 가운데 정렬 */
  justify-content: center; /* 세로로도 중앙 정렬 */
  text-align: center; /* 버튼 텍스트도 가운데 정렬 */
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;
  width: 80%; /* 너비를 80%로 설정하여 입력 필드 크기 조정 */

  &:focus {
    border-color: #888;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #a3c8ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 80%;  /* 버튼 너비를 80%로 설정하여 중앙 정렬 */
  text-align: center;  /* 버튼 텍스트 중앙 정렬 */

  &:hover {
    background-color: #82b2ff;
  }
`;

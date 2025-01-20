import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F5F5F5;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  img {
    max-width: 150px;
    margin-bottom: 30px;
  }

  #ImageLogo {
    width: 150px;
    height: auto;
    margin-top: 70px;
  }

`;


export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  position: relative;
  width: 100%;
  top: 15px;
  
  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute;
    left: 4%;
    top: 40%;
    transform: translateY(-50%);
    padding: 0 10px;
  }

  h1 {
    font-size: 1.5rem;
    color: #333;
    margin: 0 auto;
  }
`;

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 30px;
`;

export const AppName = styled.div`
  text-align: center;
  
  h2 {
    margin: 0;
    font-size: 20px;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    color: gray;
  }
`;

export const Rating = styled.div`
  margin-top: 12px;
`;



export const ReviewInput = styled.div`
  margin-bottom: 24px;
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 80px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: none;
  }
`;

export const Recommendation = styled.div`
  margin-bottom: 24px;
  p {
    margin-bottom: 8px;
  }
  label {
    margin-right: 16px;
  }
`;

export const SubmitButton = styled.button`
  width: 60%;
  max-width: 400px;
  padding: 10px 15px;
  background-color: #000;
  margin-top: 30px;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;


export const RatingStars = styled.div`
font-size: 30px;
span {
  margin: 0 5px;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #FFD700;  // 별을 hover할 때 황금색으로 변하게
  }
}
`;

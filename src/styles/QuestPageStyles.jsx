import { styled } from 'styled-components';

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

export const Content = styled.div``;

export const Quest = styled.div`
    margin-top: -25%;
    img {
    height: 200px;
    width: 345px;
    }
    display: flex;
`;

export const QuestBack = styled.div`
    // img {
    // height: 200px;
    // width: 345px;
    // }
    // position: relative;
    position: relative;
    width: 345px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const QuestText = styled.div`
    position: absolute;
    display: flex;
    textalign-content: center;
    justify-content: center;
    align-items: center;
    //bottom: 23%;
    //left: 3%;
    width: 100%;
    height: 100%;
    padding: 10px; /* 텍스트 패딩 조정 */
    box-sizing: border-box;
    font-size: 16px; /* 텍스트 크기 */
    line-height: 1.5; /* 텍스트 줄 간격 */
    color: #000; /* 텍스트 색상 */
    z-index: 1; /* 이미지 위에 표시 */
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 20px; 
    margin-top: 70px; 
    width: 100%; 
    align-items: center; 
`;

export const Option = styled.div`
    padding: 10px 20px; 
    color: ${(props) => (props.isSelected ? '#0051FF' : '#000')}; 
    border: 1px solid ${(props) => (props.isSelected ? '#0051FF' : '#E0E6F3')};
    border-radius: 5px; 
    cursor: pointer; 
    text-align: center; 
    width: 80%; 
    transition: all 0.3s ease;
    &:hover {
        color: #0051FF;
    }
`;

export const AnswerButton = styled.div`
    margin-bottom: -120px;
    margin-top: 80px;
    color: #0051FF;
    background-color: #E0E6F3;
    padding: 20px 20px;
    margin-left: 15px;
    width: 280px;
    text-align: center;
    border-radius: 18px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #0051FF;
    box-shadow: 0 5px 0px rgba(75, 74, 74, 0.1);
    &:hover {
        background-color:rgb(193, 205, 232);
        border-color:rgb(0, 69, 217);
    }
`;

export const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PopupContent = styled.div`
    position: relative;
    background: white;
    padding: 40px 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 280px;
    h2 {
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
        color: #000;
    }
    button {
        margin: 10px;
        padding: 10px 20px;
        background-color: #E0E6F3;
        color: black;
        border: none;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        width: 110px;
        height: 40px;
        &:hover {
            background-color: #E0E6F3;
        }
    }
`;

export const PopupImageWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    bottom: 10px;

    img:first-child {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    img:last-child {
        position: absolute;
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 30px;
    }
`;

export const SolutionPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const SolutionContent = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 350px;
    box-sizing: border-box;
    h2 {
        font-size: 20px;
        font-weight: bold;
        color: #333;
        margin-bottom: 20px;
        text-align: left;
        margin-left: 20px;
    }
    p {
        font-size: 16px;
        color: #555;
        line-height: 1.5;
        margin-bottom: 20px;
        margin-left: 10px;
    }
    button {
        background:rgb(0, 0, 0);
        color: white;
        border: none;
        border-radius: 18px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 14px;
        margin-right: -230px;
        &:hover {
            background:rgb(77, 77, 77);
        }
    }
`;

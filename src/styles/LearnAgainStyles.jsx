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

export const Header = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  margin-top: -210%;
`;

export const BackgroundImage = styled.div`
  padding: 0;
  position: relative;
  display: inline-block
  width: 100%;
  z-index: 0;
  img {
  width: 400px;
  height: 400px;
  }
`;

export const Header2 = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  margin-top: 30%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 5%;
  border: 2px solid black;
  padding: 10px;
  width: 150px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
`;

export const Logo = styled.div`
  margin-top: -4px;
  margin-left: 90px;
  margin-right: 15px;
  img {
    width: 60px;
    height: auto;
  }
`;

export const Content = styled.div`
    flex: 1; 
    width: 100%;
    overflow-y: auto; 
    padding: 20px;
    box-sizing: border-box;
    margin-top: 210px;
    margin-bottom: 100px;
`;

export const Question = styled.div`
    margin: 20px;
    padding: 15px;
    border: 2px solid #FFCA28;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    h3 {
        font-size: 16px;
        margin-bottom: 10px;
    }
    p {
        font-size: 14px;
        color: #666;
    }
`;



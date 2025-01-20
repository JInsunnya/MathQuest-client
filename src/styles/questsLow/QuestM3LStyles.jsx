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

export const Year = styled.div`
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

export const Level = styled.div`
  margin-top: -100px;
  font-size: 25px;
  z-index: 3;
  font-weight: bold;
  margin-left: -200px;
`;

export const Level1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  padding: 0;
  margin-top: -8%;
  cursor: pointer;
`;

export const Level1Back = styled.div`
  img {
    width: 370px;
    height: 150px;
  }
`;

export const Level1Photo = styled.div`
  position: absolute;
  z-index: 2;
  top: 22%;
  left: 16%;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const TextLevel1 = styled.div`
  position: absolute;
  z-index: 2;
  top: 23%;
  left: 37%;
  color: white;
  font-weight: bold;
`;

export const Level1Content = styled.div`
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 37%;
  color: white;
  
`;

export const Level2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  padding: 0;
  margin-top: 27%;
  cursor: pointer;
`;

export const Level2Back = styled.div`
  img {
    width: 370px;
    height: 150px;
  }
`;

export const Level2Photo = styled.div`
  position: absolute;
  z-index: 2;
  top: 22%;
  left: 16%;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const TextLevel2 = styled.div`
  position: absolute;
  z-index: 2;
  top: 23%;
  left: 37%;
  color: white;
  font-weight: bold;
`;

export const Level2Content = styled.div`
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 37%;
  color: white;
  
`;

export const Level3 = styled.div`
  position: absolute;
  z-index: 1;
  top: 39%;
  padding: 0;
  margin-top: 64%;
  cursor: pointer;
`;

export const Level3Back = styled.div`
  img {
    width: 370px;
    height: 150px;
  }
`;

export const Level3Photo = styled.div`
  position: absolute;
  z-index: 2;
  top: 22%;
  left: 16%;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const TextLevel3 = styled.div`
  position: absolute;
  z-index: 2;
  top: 23%;
  left: 37%;
  color: white;
  font-weight: bold;
`;

export const Level3Content = styled.div`
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 37%;
  color: white;
  
`;
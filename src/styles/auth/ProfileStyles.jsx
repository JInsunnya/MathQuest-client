import { styled } from 'styled-components';

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

export const Header = styled.div`
    margin-top: -28%;
    display: flex;
    gap: 110%;
`;

export const HeaderTitle = styled.div`
    white-space: nowrap;
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: -60%;
`;

export const HeaderButton = styled.div`
    white-space: nowrap;
    font-size: 1.2rem;
    margin-top: 5px;
    font-weight: bold;
    color: #458CFF;
    cursor: pointer;
    &:hover {
        color:rgb(17, 108, 255);
    }
`;

export const Logo = styled.div`
    margin-top: 40px;
    img {
    width: 100px;
    }
`;

export const Content = styled.div`
    margin-top: 8%;
    text-align: left;
    margin-left: -20%;
`;

export const Name = styled.div`
    margin-bottom: 12%;
`;

export const NameTitle = styled.div`
    margin-bottom: 5%;
`;

export const NameContent = styled.div`
    margin-left: -5px;
    input{
        width: 130%;
        height: 20px;
        padding: 8px;
        padding-left: 15px;
        font-size: 1rem;
        border: 1.5px solid #ccc;
        border-radius: 18px;
    }
`;

export const Email = styled.div`
    margin-bottom: 12%;
`;

export const EmailTitle = styled.div`
    margin-bottom: 5%;
`;

export const EmailContent = styled.div`
    margin-left: -5px;
    input{
        width: 130%;
        height: 20px;
        padding: 8px;
        padding-left: 15px;
        font-size: 1rem;
        border: 1.5px solid #ccc;
        border-radius: 18px;
    }
`;

export const Password = styled.div`
    margin-bottom: 12%;
`;

export const PasswordTitle = styled.div`
    margin-bottom: 5%;
`;

export const PasswordContent = styled.div`
    margin-left: -5px;
    input{
        width: 130%;
        height: 20px;
        padding: 8px;
        padding-left: 15px;
        font-size: 1rem;
        border: 1.5px solid #ccc;
        border-radius: 18px;
    }
`;

export const School = styled.div`
    margin-bottom: 12%;
`;

export const SchoolTitle = styled.div`
    margin-bottom: 5%;
`;

export const SchoolContent = styled.div`
    margin-left: -5px;
    input{
        width: 130%;
        height: 20px;
        padding: 8px;
        padding-left: 15px;
        font-size: 1rem;
        border: 1.5px solid #ccc;
        border-radius: 18px;
    }
`;

export const Year = styled.div`
`;

export const YearTitle = styled.div`
margin-bottom: 5%;
`;

export const YearContent = styled.div`
    margin-left: -5px;
    margin-bottom: 12%;
    select {
        width: 140%;
        height: 39px;
        padding: 8px;
        padding-left: 15px;
        font-size: 1rem;
        border: 1.5px solid #ccc;
        border-radius: 18px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: url(${(props) => props.process});
        background-repeat: no-repeat;
        background-position: right 15px center;
        background-size: 13px;
    }
`;

export const ResetButton = styled.div`
  background-color: #F83758;
  color: white;
  width: 80%;
  height: 40px;
  font-size: 1rem;
  border-radius: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 7%;
  margin-left: 7px;
  cursor: pointer;
`;
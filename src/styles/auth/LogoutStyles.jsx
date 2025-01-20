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

export const ImageLogo = styled.img`
    width: 150px;
    height: auto;
    margin-bottom: 60px;
`;

export const TextLogo = styled.img`
    width: 230px;
    height: auto;
    margin-bottom: 350px;
`;

export const Form = styled.form`
    background-color: #376AED;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    width: 350px;
    height: 350px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`;

export const InputLabel = styled.label`
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
    text-align: left;
    margin-left: 10px;
`;

export const Input = styled.input`
    width: 90%;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid white;
    margin-bottom: 20px;
    box-sizing: border-box;
    background-color: transparent;
    color: white;
    font-weight: 500;
    &::placeholder {
        color: white;
    }
    &:focus {
        outline: none;
    }
`;

export const LoginButton = styled.button`
    width: 95%;
    height: 60px;
    padding: 10px;
    background-color: #2C53BA;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background-color: #004494;
    }
`;

export const ForgotPassword = styled.p`
    color: white;
    margin-top: 15px;
    text-align: left;
    margin-left: 10px;
    font-weight: 700;
    font-size: 14px;
    margin-top: 20px;
`;

export const ForgotPasswordLink = styled.a`
    color: white;
    text-decoration: underline;
    &:hover {
        text-decoration: none;
    }
`;

export const ErrorModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ErrorMessage = styled.p`
    color: white;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const ErrorButton = styled.button`
    padding: 10px 20px;
    background-color: #ff4747;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ff2a2a;
    }
`;

export const LogoutPopup = styled.button`
`;

export const LogoutMessage = styled.button`
`;

export const CloseButton = styled.button`
`;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from '../../styles/auth/LoginStyles';
import TextLogoBlack from '../../assets/images/textlogoblack.png';
import ImageLogo from '../../assets/images/logo.png';

const Logout = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.clear();

        setUsername('');
        setPassword('');

        console.log('로그아웃 완료');

        navigate('/start');
    };

    const handleErrorClose = () => {
        setError(''); 
        setUsername(''); 
        setPassword('');
    };

    return (
        <L.Container>
            <L.ImageLogo src={ImageLogo} alt="Logo" />
            <L.TextLogo src={TextLogoBlack} alt="Text Logo" />
            <L.Form onSubmit={handleLogout}>
                <L.InputLabel htmlFor="username">아이디</L.InputLabel>
                <L.Input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="아이디 입력" 
                />
                
                <L.InputLabel htmlFor="password">비밀번호</L.InputLabel>
                <L.Input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="비밀번호 입력" 
                />
                
                <L.LoginButton type="submit">로그아웃</L.LoginButton>
            </L.Form>

            {error && (
                <L.ErrorModal>
                    <L.ErrorMessage>{error}</L.ErrorMessage>
                    <L.ErrorButton onClick={handleErrorClose}>확인</L.ErrorButton>
                </L.ErrorModal>
            )}
        </L.Container>
    );
};

export default Logout;
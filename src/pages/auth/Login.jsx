import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as L from '../../styles/auth/LoginStyles';
import TextLogoBlack from '../../assets/images/textlogoblack.png';
import ImageLogo from '../../assets/images/logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://mathquestpro.shop/auth/login/', { username, password });
            console.log('서버 응답:', response.data); 

            const { access, refresh, user } = response.data;
            if (access) {
                localStorage.setItem('authToken', access); // Access token 저장
                localStorage.setItem('refreshToken', refresh); // Refresh token 저장
                localStorage.setItem('userInfo', JSON.stringify(user)); // 사용자 정보 저장

                console.log('로그인 성공, 토큰 및 사용자 정보 저장 완료');
                navigate('/main'); // 로그인 성공 후 대시보드로 이동
            } else {
                console.error('access 토큰이 반환되지 않았습니다.');
            }
        } catch (error) {
            console.error('로그인 실패:', error);
        }
    };

    return (
        <L.Container>
            <L.ImageLogo src={ImageLogo} alt="Logo" />
            <L.TextLogo src={TextLogoBlack} alt="Text Logo" />
            <L.Form onSubmit={handleLogin}>
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
                
                <L.LoginButton type="submit">Login</L.LoginButton>
                <L.ForgotPassword>
                    <L.ForgotPasswordLink href="/forgot-password">비밀번호를 잊어버리셨나요?</L.ForgotPasswordLink>
                </L.ForgotPassword>
            </L.Form>
        </L.Container>
    );
};

export default Login;

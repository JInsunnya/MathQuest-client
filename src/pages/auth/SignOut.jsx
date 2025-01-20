import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Title,
  Subtitle,
  Input,
  Button,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
} from '../../styles/auth/SignOutStyles';
import ImageLogo from '../../assets/images/logo.png';
import QuestHeader from '../../shared/components/QuestHeader';

const SignOut = () => {
  const [username, setUsername] = useState(''); // 아이디 입력 상태
  const [password, setPassword] = useState(''); // 비밀번호 입력 상태
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 상태
  const [isChecked, setIsChecked] = useState(false); // 체크박스 상태
  const navigate = useNavigate();

  // 핸들러 함수
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleCheckboxChange = (e) => setIsChecked(e.target.checked);

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return null;
      }
  
      const response = await axios.post('https://mathquestpro.shop/user/refresh/', {
        refresh: refreshToken,
      });
  
      const newAccessToken = response.data.access;
      localStorage.setItem('token', newAccessToken); // 새 토큰 저장
      return newAccessToken;
    } catch (error) {
      console.error('토큰 갱신 오류:', error.response?.data || error.message);
      alert('다시 로그인해주세요.');
      navigate('/login');
      return null;
    }
  };
  

  const clearLocalData = () => {
    localStorage.clear(); // 로컬 데이터 초기화
    alert('회원 탈퇴가 완료되었습니다.');
    navigate('/'); // 메인 페이지로 이동
  };

  const handleSignOut = async () => {
    if (!username || !password || !confirmPassword) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!isChecked) {
      alert('회원탈퇴 확인을 위해 체크박스를 선택해주세요.');
      return;
    }

    try {
      let token = localStorage.getItem('token');
      if (!token) {
        clearLocalData(); // 로컬 데이터 초기화
        return;
      }

      const response = await axios.delete('https://mathquestpro.shop/user/delete/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { password },
      });

      if (response.status === 200) {
        alert('그동안 이용해주셔서 감사합니다.');
        clearLocalData(); // 로컬 데이터 초기화
      }
    } catch (error) {
      if (error.response?.status === 403) {
        // 토큰 갱신 후 재시도
        const newToken = await refreshAccessToken();
        if (newToken) {
          try {
            const retryResponse = await axios.delete('https://mathquestpro.shop/user/delete/', {
              headers: {
                Authorization: `Bearer ${newToken}`,
              },
              data: { password },
            });

            if (retryResponse.status === 200) {
              alert('회원탈퇴가 완료되었습니다.');
              clearLocalData(); // 로컬 데이터 초기화
            }
          } catch (retryError) {
            console.error('회원탈퇴 재시도 오류:', retryError.response?.data || retryError.message);
            alert(retryError.response?.data?.error || '오류가 발생했습니다. 다시 시도해주세요.');
            clearLocalData(); // 로컬 데이터 초기화
          }
        } else {
          // 토큰 갱신 실패 시 로컬 데이터 초기화
          clearLocalData();
        }
      } else {
        console.error('회원탈퇴 오류:', error.response?.data || error.message);
        alert(error.response?.data?.error || '오류가 발생했습니다. 다시 시도해주세요.');
        clearLocalData(); // 로컬 데이터 초기화
      }
    }
  };

  return (
    <Container>
      <QuestHeader />
      <img id="ImageLogo" src={ImageLogo} alt="Logo" />
      <Title>회원탈퇴</Title>
      <Subtitle>계정을 삭제합니다...</Subtitle>
      <Input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordChange}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="confirm"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CheckboxLabel htmlFor="confirm">회원탈퇴를 계속 진행합니다</CheckboxLabel>
      </CheckboxContainer>
      <Button onClick={handleSignOut}>완료</Button>
    </Container>
  );
};

export default SignOut;

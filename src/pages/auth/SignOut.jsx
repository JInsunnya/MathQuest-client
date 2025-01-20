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
  const [username, setUsername] = useState('');  // 아이디 입력 상태
  const [password, setPassword] = useState('');  // 비밀번호 입력 상태
  const [confirmPassword, setConfirmPassword] = useState('');  // 비밀번호 확인 상태
  const [isChecked, setIsChecked] = useState(false);  // 체크박스 상태
  const navigate = useNavigate();

  // 아이디 입력 값 처리
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // 비밀번호 입력 값 처리
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // 체크박스 변경 처리
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // 탈퇴 요청 처리
  const handleSignOut = async () => {
    // 비밀번호가 일치하는지 확인
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    
    // 체크박스가 선택되었는지 확인
    if (!isChecked) {
      alert('회원탈퇴를 계속 진행하려면 체크박스를 선택하세요.');
      return;
    }

    const token = localStorage.getItem('authToken');  // 토큰 가져오기
    
    if (!token) {
      alert('로그인된 사용자가 아닙니다.');
      return;
    }

    if (!username) {
      alert('아이디를 입력해주세요.');
      return;
    }

    try {
      // 아이디와 비밀번호를 백엔드에 전송
      const response = await axios.delete('https://mathquestpro.shop/user/delete/', {
        headers: {
          Authorization: `Bearer ${token}`,  // Authorization 헤더에 토큰 추가
        },
        data: {
          password: password,  // 비밀번호 전송
        },
      });

      if (response.status === 204) {
        alert('회원탈퇴가 완료되었습니다.');
        navigate('/');  // 탈퇴 후 리디렉션할 페이지
      }
    } catch (error) {
      alert('회원탈퇴에 실패했습니다. 비밀번호를 다시 확인해주세요.');
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

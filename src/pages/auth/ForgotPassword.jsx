import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  SubHeader,
  Form,
  Label,
  Input,
  Button,
  BackButton,
} from '../../styles/auth/ForgotPasswordStyles';

const ForgotPassword = () => {
  return (
    <Container>
      <BackButton>&larr;</BackButton>
      <Header>비밀번호 변경</Header>
      <SubHeader>비밀번호를 변경하려면 아이디를 입력하세요.</SubHeader>
      <Form>
        <Input
          type="text"
          id="username"
          placeholder="아이디를 입력하세요"
        />
        <Button>다음</Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;

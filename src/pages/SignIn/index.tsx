import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title } from './styles';

// eslint-disable-next-line arrow-body-style
const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Input />
      <Input />

      <Button>Entrar</Button>
    </Container>
  );
};

export default SignIn;

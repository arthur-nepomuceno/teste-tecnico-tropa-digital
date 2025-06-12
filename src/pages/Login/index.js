import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  LeftContent,
  LogoContainer,
  Logo,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  Input,
  PasswordToggle,
  PasswordIcon,
  Button,
  RightContent,
  Illustration,
} from './styles'; // Importa os estilos definidos em styles.js

// Importa as imagens que você salvou em src/assets
import logoImage from '../../assets/logo.png';
import illustrationImage from '../../assets/illustration.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder senha
  const [error, setError] = useState(''); // Estado para mensagem de erro
  const navigate = useNavigate(); // Hook do React Router DOM para navegação

  // Função para lidar com o envio do formulário de login
  const handleLogin = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    setError(''); // Limpa qualquer erro anterior

    // Lógica de autenticação simulada (para o teste técnico, sem API)
    // Credenciais: email = "teste@teste.com", senha = "123"
    if (email === 'teste@teste.com' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true'); // Armazena o status de login
      navigate('/home'); // Redireciona para a página Home após o login
    } else {
      setError('E-mail ou senha inválidos.'); // Define a mensagem de erro
    }
  };

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Card>
        <LeftContent>
          <LogoContainer>
            <Logo src={logoImage} alt="Logo THODII" />
          </LogoContainer>
          <Title>Bem-vindo de volta</Title>
          <Subtitle>
            Entre com sua conta para acessar o painel
          </Subtitle>

          <Form onSubmit={handleLogin}>
            {/* Exibe mensagem de erro, se houver */}
            {error && <p style={{ color: '#E53E3E', fontSize: '0.9em', marginBottom: '10px' }}>{error}</p>}

            <InputGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seunome@seuendereco.com"
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="password">Senha</Label>
              <div style={{ position: 'relative', width: '100%' }}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite aqui"
                  required
                />
                <PasswordToggle type="button" onClick={togglePasswordVisibility}>
                  {/* Ícone de olho (use um ícone de sua preferência ou SVG) */}
                  <PasswordIcon>{showPassword ? '🙈' : '👁️'}</PasswordIcon>
                </PasswordToggle>
              </div>
            </InputGroup>

            <Button type="submit">Enviar</Button>
          </Form>
        </LeftContent>

        <RightContent>
          <Illustration src={illustrationImage} alt="Ilustração de Login" />
        </RightContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
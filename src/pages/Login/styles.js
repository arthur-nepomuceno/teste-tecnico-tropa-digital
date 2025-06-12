import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F8F9FB; /* Cor de fundo principal vista na imagem */
  padding: 20px; /* Padding geral para o container */

  @media (max-width: 768px) {
    padding: 10px; /* Reduz padding em telas menores */
  }
`;

export const Card = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border-radius: 20px; /* Bordas arredondadas do cartão principal */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); /* Sombra suave para destacar o cartão */
  overflow: hidden; /* Garante que o conteúdo interno respeite as bordas arredondadas */
  width: 100%;
  max-width: 950px; /* Largura máxima do cartão, conforme a proporção na imagem */
  min-height: 550px; /* Altura mínima para garantir espaço para o conteúdo */

  @media (max-width: 768px) {
    flex-direction: column; /* Em telas menores, os conteúdos ficam um abaixo do outro */
    max-width: 500px; /* Ajusta largura para mobile */
    min-height: unset; /* Remove altura mínima em mobile para flexibilidade */
  }
`;

export const LeftContent = styled.div`
  flex: 1; /* Ocupa a metade esquerda do cartão */
  padding: 60px 50px; /* Padding interno para o conteúdo esquerdo */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente */
  align-items: flex-start; /* Alinha os itens ao início (esquerda) */

  @media (max-width: 768px) {
    padding: 30px 25px; /* Reduz padding em mobile */
    align-items: center; /* Centraliza o conteúdo horizontalmente para mobile */
    text-align: center; /* Centraliza o texto para mobile */
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 25px; /* Espaço abaixo do logo */

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 120px; /* Tamanho aproximado do logo na imagem */
  height: auto;
`;

export const Title = styled.h1`
  font-size: 2.2em; /* Tamanho do título "Bem-vindo de volta" */
  color: #333333; /* Cor do texto */
  margin-bottom: 8px; /* Espaço abaixo do título */
  font-weight: 700; /* Negrito */
  letter-spacing: -0.5px; /* Ajuste para a aparência da fonte */

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const Subtitle = styled.p`
  font-size: 1em; /* Tamanho do subtítulo */
  color: #7A7A7A; /* Cor do texto */
  margin-bottom: 35px; /* Espaço abaixo do subtítulo */
  line-height: 1.4; /* Espaçamento entre linhas */

  @media (max-width: 768px) {
    font-size: 0.9em;
    margin-bottom: 25px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espaço entre os grupos de input */

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espaço entre label e input */
`;

export const Label = styled.label`
  font-size: 0.9em; /* Tamanho da fonte da label */
  color: #555555; /* Cor da label */
  font-weight: 600; /* Negrito */
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px; /* Padding interno do input */
  border: 1px solid #E0E0E0; /* Borda cinza clara */
  border-radius: 10px; /* Bordas arredondadas do input */
  font-size: 1em; /* Tamanho da fonte do input */
  color: #333333;
  outline: none; /* Remove a borda de foco padrão do navegador */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Transição suave para foco */

  &:focus {
    border-color: #B0B0B0; /* Cor da borda ao focar, um pouco mais escura */
    box-shadow: 0 0 0 3px rgba(176, 176, 176, 0.2); /* Sombra sutil ao focar */
  }

  &::placeholder {
    color: #A9A9A9; /* Cor do placeholder */
  }
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px; /* Aumenta a área clicável */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em; /* Tamanho do ícone */
  color: #A9A9A9; /* Cor do ícone */
  transition: color 0.2s ease;

  &:hover {
    color: #7A7A7A;
  }
`;

export const PasswordIcon = styled.span`
  /* Se usar um SVG ou ícone de biblioteca, este estilo pode não ser necessário */
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: #FD7E4D; /* Cor laranja do botão */
  color: white;
  border: none;
  border-radius: 10px; /* Bordas arredondadas do botão */
  font-size: 1.1em; /* Tamanho da fonte do botão */
  font-weight: 600; /* Negrito */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease; /* Transições suaves */
  margin-top: 15px; /* Espaço acima do botão */
  box-shadow: 0 5px 15px rgba(253, 126, 77, 0.3); /* Sombra para o botão */

  &:hover {
    background-color: #E66A3D; /* Laranja mais escuro ao passar o mouse */
    transform: translateY(-2px); /* Efeito sutil de levantar */
  }

  &:active {
    transform: translateY(0); /* Efeito de "pressionar" */
  }
`;

export const RightContent = styled.div`
  flex: 1; /* Ocupa a metade direita do cartão */
  background-color: #FD7E4D; /* Cor de fundo laranja */
  border-radius: 0 20px 20px 0; /* Bordas arredondadas apenas no lado direito */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px; /* Padding interno para a ilustração */

  @media (max-width: 768px) {
    display: none; /* Oculta a ilustração em telas menores para focar no formulário */
    /* Se quisesse mostrar em mobile, poderia ajustar para:
    flex: none;
    width: 100%;
    border-radius: 0 0 20px 20px; // Arredonda a parte inferior para mobile
    padding: 20px;
    */
  }
`;

export const Illustration = styled.img`
  max-width: 100%; /* Garante que a ilustração seja responsiva */
  height: auto;
  display: block; /* Remove espaço extra abaixo da imagem */
`;
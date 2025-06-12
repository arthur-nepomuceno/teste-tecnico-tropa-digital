import styled from 'styled-components';

// Cores base (extraídas do layout)
const primaryColor = '#FD7E4D'; // Laranja principal
const secondaryTextColor = '#7A7A7A'; // Cinza para textos secundários
const activeMenuItemBg = '#FFF2ED'; // Fundo do item de menu ativo
const activeMenuItemText = '#E66A3D'; // Cor do texto do item de menu ativo
const borderColor = '#E0E0E0'; // Cor da borda geral
const tableHeaderColor = '#F2F2F2'; // Fundo do cabeçalho da tabela
const statusActiveColor = '#4CAF50'; // Verde para status Ativo
const statusDotColor = '#4CAF50'; // Cor da bolinha de status

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #F8F9FB; /* Cor de fundo geral da página */

  @media (max-width: 768px) {
    flex-direction: column; /* Em telas menores, sidebar fica no topo */
  }
`;

export const Sidebar = styled.nav`
  width: 250px; /* Largura fixa da sidebar */
  background-color: #FFFFFF;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05); /* Sombra suave à direita */
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; /* Espaçamento entre seções principais */
  position: sticky; /* Sidebar fixa ao rolar */
  top: 0;
  left: 0;
  height: 100vh; /* Ocupa a altura total da viewport */

  @media (max-width: 768px) {
    width: 100%; /* Ocupa a largura total em mobile */
    height: auto; /* Altura automática para mobile */
    position: relative; /* Remove sticky em mobile */
    padding: 15px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* Sombra na parte inferior */
    flex-direction: row; /* Itens da sidebar ficam em linha em mobile */
    justify-content: space-around; /* Distribui itens */
    gap: 10px; /* Reduz gap */
    flex-wrap: wrap; /* Permite que os itens quebrem linha */
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    display: none; /* Oculta a logo em telas pequenas para economizar espaço */
  }
`;

export const Logo = styled.img`
  width: 150px; /* Tamanho da logo na sidebar */
  height: auto;
`;

export const MenuSection = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin-top: 20px; /* Espaço acima do menu */

  @media (max-width: 768px) {
    display: flex; /* Transforma em linha */
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 0;
    gap: 5px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px; /* Espaço entre ícone e texto */
  padding: 12px 30px; /* Padding interno */
  margin-bottom: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  color: ${secondaryTextColor}; /* Cor padrão do texto do item de menu */
  font-weight: 500;

  ${props => props.active && `
    background-color: ${activeMenuItemBg}; /* Fundo para item ativo */
    color: ${activeMenuItemText}; /* Cor do texto para item ativo */
    border-right: 5px solid ${primaryColor}; /* Borda laranja no lado direito */
    font-weight: 600;
  `}

  &:hover {
    background-color: #F8F8F8; /* Fundo ao passar o mouse */
  }

  /* Estilo para o "MENU" (primeiro item) */
  &:first-child {
    padding: 10px 30px 5px; /* Ajusta padding para o "MENU" */
    font-size: 0.8em;
    color: ${secondaryTextColor};
    font-weight: 600;
    margin-bottom: 15px;
    cursor: default; /* Remove cursor de ponteiro */
    &:hover {
      background-color: transparent;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Ícone acima do texto em mobile */
    padding: 8px 10px;
    border-right: none !important; /* Remove borda direita em mobile */
    border-bottom: ${props => props.active ? `3px solid ${primaryColor}` : 'none'}; /* Borda inferior em mobile */
    font-size: 0.85em; /* Reduz fonte em mobile */
    &:first-child {
      display: none; /* Oculta "MENU" em mobile */
    }
  }
`;

export const MenuIcon = styled.span`
  font-size: 1.2em; /* Tamanho do ícone */
  color: inherit; /* Herda a cor do MenuItem */

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

export const MenuText = styled.span`
  white-space: nowrap; /* Evita quebra de linha para o texto do menu */
`;

export const UserSection = styled.div`
  margin-top: auto; /* Empurra para o final da sidebar */
  width: 100%;
  padding: 20px 30px;
  border-top: 1px solid ${borderColor}; /* Borda superior */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: none; /* Oculta seção do usuário em telas menores */
  }
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; /* Borda redonda */
  object-fit: cover;
  margin-bottom: 5px;
`;

export const UserInfo = styled.div`
  text-align: center;
`;

export const UserName = styled.p`
  font-weight: 600;
  color: #333333;
  font-size: 1em;
`;

export const UserRole = styled.p`
  font-size: 0.8em;
  color: ${secondaryTextColor};
  margin-top: 2px;
`;

export const UserAction = styled(MenuItem)`
  padding: 8px 30px; /* Ajusta padding para ações do usuário */
  justify-content: flex-start;
  width: 100%; /* Ocupa a largura total para alinhamento */
  margin-bottom: 0; /* Remove margem extra */
  color: ${secondaryTextColor};

  &:hover {
    background-color: #F8F8F8;
    color: ${activeMenuItemText}; /* Cor do texto ao passar o mouse */
  }

  /* Não possui borda ativa */
  ${props => props.active && `
    border-right: none;
    background-color: transparent;
    color: ${secondaryTextColor};
  `}
`;

export const MainContent = styled.div`
  flex: 1; /* Ocupa o restante do espaço horizontal */
  padding: 30px 40px; /* Padding para o conteúdo principal */

  @media (max-width: 768px) {
    padding: 20px 15px; /* Reduz padding em mobile */
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start; /* Alinhamento à esquerda */
  align-items: center;
  margin-bottom: 40px; /* Espaço abaixo do cabeçalho */

  @media (max-width: 768px) {
    margin-bottom: 25px;
    justify-content: center; /* Centraliza em mobile */
  }
`;

export const Greeting = styled.p`
  font-size: 1.1em;
  color: #333333;
  font-weight: 400;
`;

export const UserGreeting = styled.span`
  font-weight: 700; /* Negrito para o nome do usuário */
`;

export const PageTitle = styled.h2`
  font-size: 1.8em;
  color: #333333;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ContentArea = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const TableControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column; /* Itens um abaixo do outro em mobile */
    gap: 15px;
    margin-bottom: 20px;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: 300px; /* Largura do input de busca */

  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura em mobile */
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${secondaryTextColor};
  font-size: 1.1em;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 15px 12px 45px; /* Padding para acomodar o ícone */
  border: 1px solid ${borderColor};
  border-radius: 8px;
  font-size: 0.95em;
  color: #333333;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${primaryColor};
  }

  &::placeholder {
    color: ${secondaryTextColor};
  }
`;

export const InsertButton = styled.button`
  background-color: ${primaryColor}; /* Laranja */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 0.95em;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px; /* Espaço entre ícone e texto */
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #E66A3D; /* Laranja mais escuro */
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura em mobile */
    justify-content: center;
  }
`;

export const ButtonText = styled.span`
  /* Estilo para o texto do botão */
`;

export const TableContainer = styled.div`
  overflow-x: auto; /* Permite rolagem horizontal em tabelas largas */
  width: 100%;
  margin-bottom: 25px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse; /* Remove espaçamento entre bordas da célula */
  min-width: 700px; /* Garante largura mínima para a tabela não quebrar muito em mobile */
`;

export const TableHeader = styled.th`
  background-color: ${tableHeaderColor}; /* Fundo cinza claro */
  text-align: left;
  padding: 15px 20px;
  color: ${secondaryTextColor};
  font-weight: 600;
  font-size: 0.9em;
  text-transform: uppercase;
  border-bottom: 1px solid ${borderColor};
`;

export const TableBody = styled.tbody`
  /* Estilos para o corpo da tabela */
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${borderColor}; /* Borda entre as linhas */
  &:last-child {
    border-bottom: none; /* Remove borda da última linha */
  }

  &:hover {
    background-color: #FDFDFD; /* Efeito hover na linha */
  }

  ${props => props.header && ` /* Estilo para a linha de cabeçalho (<thead>) */
    background-color: ${tableHeaderColor};
  `}
`;

export const TableCell = styled.td`
  padding: 15px 20px;
  color: #333333;
  font-size: 0.95em;
  vertical-align: middle; /* Alinha o conteúdo verticalmente */
  white-space: nowrap; /* Evita quebra de linha em células (para não bagunçar) */

  &:last-child {
    text-align: right; /* Alinha o ícone de três pontos à direita */
  }

  @media (max-width: 768px) {
    font-size: 0.85em; /* Reduz fonte da célula em mobile */
    padding: 10px 15px;
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px; /* Espaço entre a bolinha e o texto */
  padding: 6px 12px;
  border-radius: 20px; /* Bordas arredondadas para o badge */
  font-size: 0.8em;
  font-weight: 600;
  text-transform: uppercase;

  ${props => props.status === 'active' && `
    background-color: rgba(76, 175, 80, 0.1); /* Fundo verde claro */
    color: ${statusActiveColor};
    .status-dot {
      background-color: ${statusDotColor}; /* Bolinha verde */
    }
  `}

  ${props => props.status === 'inactive' && `
    background-color: rgba(255, 152, 0, 0.1); /* Fundo laranja claro */
    color: #FF9800; /* Laranja */
    .status-dot {
      background-color: #FF9800; /* Bolinha laranja */
    }
  `}

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Alinha a paginação à direita */
  align-items: center;
  gap: 10px; /* Espaço entre os botões */
  margin-top: 30px;

  @media (max-width: 768px) {
    justify-content: center; /* Centraliza em mobile */
    margin-top: 20px;
    gap: 5px;
  }
`;

export const PaginationButton = styled.button`
  background-color: ${props => (props.active ? primaryColor : '#F2F2F2')}; /* Laranja para ativo, cinza para inativo */
  color: ${props => (props.active ? 'white' : '#333333')};
  border: 1px solid ${props => (props.active ? primaryColor : borderColor)};
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => (props.active ? '#E66A3D' : '#EAEAEA')};
    color: ${props => (props.active ? 'white' : '#111')};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #F8F8F8;
    color: ${secondaryTextColor};
  }

  ${props => (props.children === 'Anterior' || props.children === 'Próxima') && `
    font-weight: 600;
    min-width: 80px; /* Largura mínima para os botões "Anterior" e "Próxima" */
  `}
`;

export const Ellipsis = styled.span`
  color: ${secondaryTextColor};
  font-size: 1.2em;
  padding: 0 5px;
`;
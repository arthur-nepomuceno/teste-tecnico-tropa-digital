import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Sidebar,
  LogoContainer,
  Logo,
  MenuSection,
  MenuItem,
  MenuIcon,
  MenuText,
  UserSection,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  UserAction,
  MainContent,
  Header,
  Greeting,
  UserGreeting,
  PageTitle,
  ContentArea,
  TableControls,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  InsertButton,
  ButtonText,
  TableContainer,
  StyledTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  StatusBadge,
  PaginationContainer,
  PaginationButton,
  Ellipsis,
} from './styles';

import logoImage from '../../assets/logo.png'; // A mesma logo do Login
import avatarImage from '../../assets/avatar.png'; // Crie esta imagem ou use uma que se pareça

const HomePage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Apenas para simular a paginação

  // Dados mockados para a tabela, simulando uma API
  const events = [
    { id: 1, name: 'Clube do Laço Coração Pantaneiro', totalTeams: 10, status: 'Ativo', date: '09 a 11 de Junho' },
    { id: 2, name: 'Clube do Laço Coração Pantaneiro', totalTeams: 10, status: 'Ativo', date: '09 a 11 de Junho' },
    { id: 3, name: 'Evento Teste 3', totalTeams: 5, status: 'Ativo', date: '15 a 17 de Julho' },
    { id: 4, name: 'Campeonato de Verão', totalTeams: 12, status: 'Inativo', date: '20 a 22 de Agosto' },
    { id: 5, name: 'Festival de Inverno', totalTeams: 8, status: 'Ativo', date: '01 a 03 de Setembro' },
    { id: 6, name: 'Torneio Amigável', totalTeams: 6, status: 'Inativo', date: '10 a 12 de Outubro' },
  ];

  // Lógica de Paginação
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove o status de logado
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <Container>
      <Sidebar>
        <LogoContainer>
          <Logo src={logoImage} alt="Logo THODII Digital" />
        </LogoContainer>

        <MenuSection>
          <MenuItem>
            <MenuText>MENU</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuIcon>📊</MenuIcon> {/* Ícone Dashboard */}
            <MenuText>Dashboard</MenuText>
          </MenuItem>
          <MenuItem active> {/* Item "Eventos" ativo */}
            <MenuIcon>📅</MenuIcon> {/* Ícone Eventos */}
            <MenuText>Eventos</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuIcon>👥</MenuIcon> {/* Ícone Equipes */}
            <MenuText>Equipes</MenuText>
          </MenuItem>
          <MenuItem>
            <MenuIcon>📝</MenuIcon> {/* Ícone Inscrições */}
            <MenuText>Inscrições</MenuText>
          </MenuItem>
        </MenuSection>

        <UserSection>
          <UserAvatar src={avatarImage} alt="Avatar Kaique Steck" />
          <UserInfo>
            <UserName>Kaique Steck</UserName>
            <UserRole>Administrador</UserRole>
          </UserInfo>
          <UserAction>
            <MenuIcon>✏️</MenuIcon> {/* Ícone Lápis */}
            <MenuText>Alterar dados</MenuText>
          </UserAction>
          <UserAction onClick={handleLogout}>
            <MenuIcon>🚪</MenuIcon> {/* Ícone Sair */}
            <MenuText>Sair</MenuText>
          </UserAction>
        </UserSection>
      </Sidebar>

      <MainContent>
        <Header>
          <Greeting>
            Bem vindo de volta, <UserGreeting>Kaique Steck</UserGreeting>
          </Greeting>
        </Header>

        <ContentArea>
          <PageTitle>Todos eventos</PageTitle>

          <TableControls>
            <SearchInputContainer>
              <SearchIcon>🔍</SearchIcon> {/* Ícone Lupa */}
              <SearchInput type="text" placeholder="Buscar eventos" />
            </SearchInputContainer>
            <InsertButton>
              <SearchIcon>+</SearchIcon> {/* Ícone de adição */}
              <ButtonText>Inserir novo</ButtonText>
            </InsertButton>
          </TableControls>

          <TableContainer>
            <StyledTable>
              <thead>
                <TableRow header>
                  <TableHeader>Nome do evento</TableHeader>
                  <TableHeader>Total de equipes</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Data</TableHeader>
                  <TableHeader></TableHeader> {/* Coluna para o menu de três pontos */}
                </TableRow>
              </thead>
              <TableBody>
                {currentEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.totalTeams}</TableCell>
                    <TableCell>
                      <StatusBadge status={event.status === 'Ativo' ? 'active' : 'inactive'}>
                        <span className="status-dot"></span>
                        {event.status}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>
                      <MenuIcon>⋮</MenuIcon> {/* Ícone de três pontos verticais */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>

          <PaginationContainer>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </PaginationButton>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationButton
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                active={currentPage === index + 1}
              >
                {index + 1}
              </PaginationButton>
            ))}
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Próxima
            </PaginationButton>
          </PaginationContainer>
        </ContentArea>
      </MainContent>
    </Container>
  );
};

export default HomePage;
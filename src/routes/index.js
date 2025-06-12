import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login';
// Importaremos HomePage quando ela for criada
import HomePage from '../pages/Home'; // Este import pode dar erro agora, será corrigido depois

// Componente auxiliar para proteger rotas (simulação de autenticação)
const PrivateRoute = ({ children }) => {
  // Verifica se o usuário está "logado" baseado em uma flag no localStorage
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  if (!isAuthenticated) {
    // Se não estiver logado, redireciona para a página de login
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, renderiza o componente filho (a página protegida)
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rota para a página de Login */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rota protegida para a página Home */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />

      {/* Rota para qualquer outro caminho não encontrado */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
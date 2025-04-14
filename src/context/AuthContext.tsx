"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

// Interface para tipo de usuário
interface User {
  id: string;
  name: string;
  email: string;
}

// Interface para o contexto de autenticação
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Criando o contexto com valores iniciais
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  logout: () => {},
});

// Hook para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

// Provedor do contexto de autenticação
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    // Aqui você pode verificar se há um token salvo e validá-lo
    // Por enquanto, vamos apenas simular o carregamento
    const checkAuth = async () => {
      try {
        // Simulando verificação de autenticação
        setTimeout(() => {
          setLoading(false);
          // Define o usuário como null (não autenticado)
        }, 1000);
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Função de login
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Aqui você implementaria a chamada real para API de login
      // Simulando login bem-sucedido após 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Exemplo de usuário autenticado
      const authenticatedUser: User = {
        id: "1",
        name: "Usuário Teste",
        email: email
      };
      
      setUser(authenticatedUser);
      // Você também poderia salvar um token JWT aqui em localStorage
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    // Você também removeria o token JWT aqui
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} 
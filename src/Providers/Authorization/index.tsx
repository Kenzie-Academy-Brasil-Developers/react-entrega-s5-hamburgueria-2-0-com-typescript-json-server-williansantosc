import { createContext, useState, useContext } from "react";
import { History } from "history";
import api from "../../services/api";
import { ChildrenProps } from "../../types/children";
import toast from "react-hot-toast";

interface DataProps {
  email: string;
  password: string;
}

interface AuthProviderProps {
  token: string;
  id: string;
  login: (userData: DataProps, history: History) => void;
  signUp: (userData: DataProps, history: History) => void;
}

export const AuthContext = createContext<AuthProviderProps>(
  {} as AuthProviderProps
);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [token, setToken] = useState<string>(
    () => localStorage.getItem("token") || ""
  );
  const [id, setId] = useState<string>(() => localStorage.getItem("id") || "");

  function login(userData: DataProps, history: History) {
    api
      .post("/login", userData)
      .then((res) => {
        history.push("/");

        localStorage.setItem("token", res.data.accessToken);
        setToken(res.data.accessToken);

        localStorage.setItem("id", res.data.user.id);
        setId(res.data.user.id);
        toast.success("Login realizado com sucesso");
      })
      .catch((_) => toast.error("Email ou senha inválidos"));
  }

  function signUp(userData: DataProps, history: History) {
    api
      .post("/register", userData)
      .then((res) => {
        history.push("/login");
        toast.success("Conta criada com sucesso!");
      })
      .catch((err) => toast.error("Erro ao criar a conta, tente outro email"));
  }

  return (
    <AuthContext.Provider value={{ login, signUp, token, id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

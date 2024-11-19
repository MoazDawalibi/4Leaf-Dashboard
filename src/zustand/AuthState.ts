import { create } from "zustand";
import { ABILITIES_KEY, TOKEN_KEY, TYPE_KEY, USER_KEY } from "../config/AppKey";
import { useNavigate } from "react-router-dom";

interface AuthStore {
  token: string | null | undefined;
  abilities: any;
  isAuthenticated: boolean;

  login: (Data: any) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthState = create<AuthStore>((set) => {
  const storedToken = localStorage.getItem(TOKEN_KEY);
  const storedAbilities = localStorage.getItem(ABILITIES_KEY);
  const storedType = localStorage.getItem(TYPE_KEY);

  return {
    isAuthenticated: !!storedToken,
    token: storedToken,
    abilities: storedAbilities,
    type: storedType,

    login: async (Data) => {
      console.log(Data);
      localStorage.setItem(TOKEN_KEY, Data?.token);
      localStorage.setItem(USER_KEY, JSON.stringify(Data?.user));
      localStorage.setItem(ABILITIES_KEY, JSON.stringify(Data?.abilities));
      localStorage.setItem(TYPE_KEY, JSON.stringify(Data?.type));

      set((state) => ({
        isAuthenticated: true,
        token: Data?.token,
        abilities: Data?.abilities,
        type: Data?.type,
      }));
    },
    logout: async () => {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(ABILITIES_KEY);
      localStorage.removeItem(TYPE_KEY);

      set(() => ({
        isAuthenticated: false,
        token: null,
        abilities: null,
        tpye: null,
      }));
    },
  };
});

export default useAuthState;

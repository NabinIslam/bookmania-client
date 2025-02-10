"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { apiBaseUrl } from "../secrets";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await fetch(`${apiBaseUrl}/users/me`, {
            headers: {
              Authorization: token,
            },
          });

          const userData = await response.json();

          if (response.ok) {
            setUser(userData?.payload);
          } else {
            localStorage.removeItem("token"); // Clear invalid token
          }
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUser();
  }, [user, setUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

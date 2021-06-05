import React, { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("@EstablishmentManager:User");

      if (user) {
        return JSON.parse(user);
      }
    }
    return {};
  });

  const signIn = useCallback((formData) => {
    console.log(formData);

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "@EstablishmentManager:User",
        JSON.stringify({ ...formData, signed: true })
      );
      setData({ ...formData, signed: true });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        email: data.email,
        name: data.name,
        googleId: data.googleId,
        signed: data.signed,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

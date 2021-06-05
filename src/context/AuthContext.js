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
    console.log("FORM:");

    console.log(formData);

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "@EstablishmentManager:User",
        JSON.stringify(formData)
      );
      setData(formData);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        email: data.email,
        name: data.name,
        googleId: data.googleId,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

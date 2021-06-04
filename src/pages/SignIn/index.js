import React from "react";
import { GoogleLogin } from "react-google-login";

import logo from "../../assets/store.png";
import Container from "../../components/UI/Container";
import AuthLayout from "../_layouts/auth";
import { Titulo } from "./styles";

export default function SignIn() {
  // const loading = useSelector(state => state.Auth.loading);
  const SCOPES = [
    // "https://www.googleapis.com/auth/admin.directory.user.readonly",
    // 'https://www.googleapis.com/auth/admin.directory.user',
  ];

  return (
    <AuthLayout>
      <Container>
        <img src={logo} alt="Safetec" />

        <form>
          <Titulo>Bem-vindo ao Gerenciador de Estabelecimentos</Titulo>

          <GoogleLogin
            className="loginButton"
            clientId=""
            scope={`${SCOPES.join(" ")}`}
            onSuccess={() => console.log("Logou")}
            onFailure={() => console.log("Falhou")}
            cookiePolicy="single_host_origin"
            buttonText="Login com Google"
            // isSignedIn={signed}
            autoLoad={false}
          />
        </form>
      </Container>
    </AuthLayout>
  );
}

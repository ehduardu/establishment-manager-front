import { ToastContainer } from "react-toastify";

import "./App.css";
import Routes from "./routes/index";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
        style={{
          zIndex: 1000,
          top: 87,
        }}
      />
    </>
  );
}

export default App;

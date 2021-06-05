import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Routes from "./routes/index";
import history from "./services/history";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router history={history}>
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
    </Router>
  );
}

export default App;

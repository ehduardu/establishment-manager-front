import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FaStore, FaSearch, FaSpinner } from "react-icons/fa";

import DefaultLayout from "../_layouts/default";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";

import { Content, Form, SubmitButton, List } from "./styles";

export default function Home() {
  const history = useHistory();

  const { email, signed } = useContext(AuthContext);
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(false);

  if (!signed) {
    history.push("/");
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const loginResponse = await api.get("/establishments");

        console.log(loginResponse);
        setEstablishments(loginResponse.data);
      } catch (error) {
        console.log(error.response.status);

        toast.error(error.response.data.message, { autoClose: 5000 });
      }
      setLoading(false);
    }

    loadData();
  }, [email]);

  return (
    <DefaultLayout>
      <Content>
        <h1>
          <FaStore />
          Estabelecimentos
        </h1>
        <Form>
          <input type="text" placeholder="Pesquisar por localidade" />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#81d2eb" size={14} />
            ) : (
              <FaSearch color="#81d2eb" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {establishments.map((rep, index) => (
            <li key={rep.name}>
              <span>{rep.name}</span>
              <Link to={`/establishments/${encodeURIComponent(rep.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Content>
    </DefaultLayout>
  );
}

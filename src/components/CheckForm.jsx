import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { api } from "./api";
import { useParams } from "react-router";
import FormContact from "./FormContact";
import TrackForm from "./TrackForm";
import AuthContext from "../context/AuthContext";

const CheckForm = () => {
  const [client, setClient] = useState({});
  //   const params = useParams();
  const { user } = useContext(AuthContext);
  const getClient = () => {
    axios
      .get(`${api}/clients/${user.id}`)
      .then((res) => {
        console.log(res.data);
        setClient(res.data.client);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getClient();
  }, []);
  return <div>{client.is_first_form ? <FormContact /> : <TrackForm />}</div>;
};

export default CheckForm;

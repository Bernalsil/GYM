import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Form from "../components/Form";
import Profile from "../components/Profile";
import Faq from "../components/Faq";
import AdminPage from "../components/AdminPage/AdminPage";
import ClientInfo from "../components/AdminPage/ClientInfo";
import CheckForm from "../components/CheckForm";
import Tracking from "../components/AdminPage/Tracking";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/contact-form" element={<CheckForm />} />
      <Route path="/profile/:user_id" element={<Profile />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/client/tracking" element={<Tracking />} />
      <Route path="/admin/client/:user_id" element={<ClientInfo />} />
    </Routes>
  );
};

export default Routers;

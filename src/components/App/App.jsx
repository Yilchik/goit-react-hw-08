import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={<RestrictedRoute component={RegistrationPage} />}
      />
      <Route
        path="/login"
        element={<RestrictedRoute component={LoginPage} />}
      />
      <Route
        path="/contacts"
        element={<PrivateRoute component={ContactsPage} />}
      />
    </Routes>
  </Layout>
);

export default App;

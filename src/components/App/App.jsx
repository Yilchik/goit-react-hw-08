import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <hr className={css.line}></hr>
      <SearchBox />
      <hr className={css.line}></hr>
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;

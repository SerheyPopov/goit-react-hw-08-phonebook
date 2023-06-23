import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from '../components/Form/Form';
import { ContactList } from '../components/Contacts/ContactList';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from '../redux/Operations';

const MainPage = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
export default MainPage;

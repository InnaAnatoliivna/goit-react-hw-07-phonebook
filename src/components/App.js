import React, { useEffect } from 'react';
import Head from './Title/head';
import Section from './Title/section-title';
import Contacts from './Contacts/contacts';
import SearchContact from './SearchContact/SearchContact';
import AddContactForm from './Add-contact/add-contact';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectErrorContacts, selectLoaderContacts } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';

export const App = () => {
  // const dispatch = useDispatch();
  // const error = useSelector(selectErrorContacts);
  // const isLoading = useSelector(selectLoaderContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch])

  return (
    <div className='container'>
      <Head headTitle='Phonebook' />
      <AddContactForm />
      <Section title='Contacts'>
        <SearchContact
          searchTitle='Find contacts by name' />
        <Contacts />
      </Section>
    </div>
  );
}

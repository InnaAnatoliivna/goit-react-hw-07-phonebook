import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Head from './Title/head';
import Section from './Title/section-title';
import Contacts from './Contacts/contacts';
import SearchContact from './SearchContact/SearchContact';
import AddContactForm from './Add-contact/add-contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorContacts, selectLoaderContacts } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import Loading from './Loading/Loading';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorContacts);
  const isLoading = useSelector(selectLoaderContacts);

  useEffect(() => {
    dispatch(fetchContacts());
    console.log('fetch in useEEEEfect')
  }, [dispatch])

  return (
    <div className='container'>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <Head headTitle='Phonebook' />
      <AddContactForm />
      <Section title='Contacts'>
        {isLoading && !error && <Loading />}
        <SearchContact
          searchTitle='Find contacts by name' />
        <Contacts />
      </Section>
    </div>
  );
}

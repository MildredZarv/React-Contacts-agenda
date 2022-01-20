import React from 'react';
import { Header } from '../Header';
import { SearchContact } from '../SearchContact';
import { ContactsList } from '../ContactsList';
import { ContactForm } from '../ContactForm';
import { Contexto } from '../Contexto';
import './AppUI.css';

function AppUI() {
  const {searchValue, currentContacts, contacts, handleDeleteContact, handleEditContact} = React.useContext(Contexto);
  
  return (
    <>
      <Header/>
      <SearchContact />
      <div className = 'main'>
        <ContactsList
          contacts = { (searchValue.length > 1 ) ? currentContacts : contacts }  
          handleDeleteContact = { handleDeleteContact }
          handleEditContact = { handleEditContact }
        />
        <ContactForm/>
      </div>
    </>
  );
}

export  { AppUI };

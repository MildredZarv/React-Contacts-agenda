import React, { useState, createContext } from 'react';

const Contexto = createContext();

const contactsDefault = [
    {id: 1, name: 'Julian Diaz', phone: '9512232000', email: 'jdiaz@hotmail.com' },
    {id: 2, name: 'Diego de la Vega', phone: '557489601', email: 'diegovega@hotmail.com' },
    {id: 3, name: 'Diana Santiago', phone: '9582361524', email: 'diannasantiego@hotmail.com' },
];

function ContextoProvider(props){
    const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useState(contactsDefault);
  const [contactToEdit, setContactToEdit] = useState(null);

  let currentContacts;
  
  if(searchValue.length > 1){
    currentContacts = contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactSearched = searchValue.toLowerCase();
      return contactName.includes(contactSearched);
    });
  }
  
const handleDeleteContact = (contact) => {
  const newContacts = contacts.filter(contacto => contacto.id !== contact.id );
  setContacts(newContacts);
} 

const handleAddContact = (name, phone, email) => {
  const id = contacts[contacts.length - 1].id + 1;
  const newContact = {
    name,
    phone,
    email,
    id: id
  }
  const contactos = [...contacts];
  contactos.push(newContact);
  setContacts(contactos);
}

const updateContact = (contact) => {
  const index = contacts.indexOf(contact);
  const updatedContacts = [...contacts];
  updatedContacts[index] = contact;
  setContacts(updatedContacts);
  clearContacToEdit();
}

const handleEditContact = (contact) => {
  setContactToEdit(contact);
}

const clearContacToEdit = () => {
  setContactToEdit(null);
}
    return(
        <Contexto.Provider value = {{
            searchValue, 
            setSearchValue,
            currentContacts,
            contacts,
            handleDeleteContact,
            handleEditContact,
            handleAddContact, 
            updateContact,
            contactToEdit,
            clearContacToEdit
        }}>
            {props.children}
        </Contexto.Provider>
    );
}

export { Contexto, ContextoProvider };
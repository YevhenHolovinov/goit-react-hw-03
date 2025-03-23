import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';

import {useEffect, useState } from 'react';
import  useContact  from '../../useContact.json';
import css from './App.module.css';

// const LS_CONTACTS_KEY = 'initial-contacts';


// const initialContacts = () => {
// 	const localStorageContacts = localStorage.getItem(LS_CONTACTS_KEY);
// 	return localStorageContacts ? JSON.parse(localStorageContacts) : useContact;
// };


 export default function App () {
  const [contacts, setContacts] = useState(useContact);
  const [filter, setFilter] = useState('');

  
	useEffect(() => {
		localStorage.setItem(useContact, JSON.stringify(contacts));
	}, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const handleDeleteContacts = (Id) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== Id);
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList contacts={visibleContact} onDelete={handleDeleteContacts} />
    </div>
  );
 };
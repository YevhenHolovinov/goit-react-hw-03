import ContactList from '../ContactList/ContactList';

import { useState } from 'react';
import  UseContact  from '../../UseContact.json';
import css from './App.module.css';

 export default function App () {
  
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList />
    </div>
  );
 };
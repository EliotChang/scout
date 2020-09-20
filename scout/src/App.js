import React from 'react';
import './App.css';
import Header from './components/Header.js';
import PhoneInput from './components/PhoneInput.js';
import TableHeader from './components/TableHeader.js';
import Table from './components/Table.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
      <div id= 'body'>
          <Header />
          <PhoneInput />
          <Table />
          <Footer />
      </div>
  );
}


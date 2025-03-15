import * as React from 'react'
import './App.css';
import Card from "./Components/CardList/CardList";
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { SyntheticEvent, useState } from 'react';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { Outlet } from 'react-router';

function App() {

  return <>
  <Navbar />
  <Outlet />
  </>
}

export default App;
 
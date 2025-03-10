import * as React from 'react'
import './App.css';
import Card from "./Components/CardList/CardList";
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { SyntheticEvent, useState } from 'react';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] =useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
  };
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value=== e.target[0].value )
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value]
    setPortfolioValues(updatedPortfolio);
  };
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result == "string") {
        setServerError(result);
      } else if(Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(searchResult)
  };
  return (
    <div className="App">
      <Search onSearchSubmit = {onSearchSubmit} search = {search} handleSearchChange = {handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio portfolioValues = {portfolioValues}/>
      <CardList searchResults ={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
 
import React from 'react';
import Header from './components/Header';
import AnimalList from './components/AnimalList';
import './App.scss';

export default function App(){
      return (
        <div className="App">
          <Header guideName={'Brenda'} />
          <AnimalList />
        </div>
      );
}


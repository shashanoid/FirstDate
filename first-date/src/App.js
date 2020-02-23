import React from 'react';
import logo from './logo.svg';

import Gender from './components/gender'
import Age from './components/age'
import Alcoholic from './components/alcoholic'
import './App.css';
function App() {
  return (

    <div>
      <h1>First Date</h1>
      <nav class="navbar navbar-expand-md">
      <a class="navbar-brand" href="index.html">
      </a>
      <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navigation">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="investors.html">Find a match</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="support.html">Share your stories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact Us</a>
          </li>
        </ul>
        
      </div>
    </nav>
      <Gender />
      <Age />
      <Alcoholic />

    </div>
  );
}

export default App;

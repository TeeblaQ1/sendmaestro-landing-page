import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
  <>
  <LandingPage/>
  <Analytics />
  </>
  );
}

export default App;

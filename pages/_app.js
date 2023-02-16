import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import salecka from '../reducers/salecka';


import Index from './index';
import women from './women';
import Men from '../components/Men';


const store = configureStore({
  reducer: {salecka},
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>

      {/* <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/women" element={<women />} />
        </Routes>
      </Router> */}
      <Component {...pageProps} />

      {/* <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="home" element={<Home />} />
            <Route path="women" element={<Women />} />
          </Routes>
        </BrowserRouter> */}
      {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/men" element={<Men />} />
    <Route
        path="*"
        element={<Navigate to="/" replace />} //this is a way to redirect
    />
  </Routes>
</BrowserRouter> */}

    </Provider>
  );
}

export default App;

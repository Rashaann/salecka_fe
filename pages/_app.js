import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import salecka from '../reducers/salecka';


import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';


import Index from './index';
import women from './women';
import Men from '../components/Men';






const reducers = combineReducers({salecka});

const persistConfig = {key: 'salecka', storage};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>SALECKA - Le luxe à la portée de tous</title>
        </Head>
      <Component {...pageProps} />
      </PersistGate>

      {/* <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/women" element={<women />} />
        </Routes>
      </Router> */}

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

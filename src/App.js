import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
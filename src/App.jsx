import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
      </Provider>
    </>
  );
}

export default App;

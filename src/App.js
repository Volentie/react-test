import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Produtos from "./Produtos/Produtos";

var State = () => {
  const page = window.location;
  if (page.href.includes("/produtos")) {
    return <Produtos />;
  }
  return null;
};

function App() {
  return (
    <>
      <Header />
      <Home />
      <State />
    </>
  );
}

export default App;

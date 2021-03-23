import React from "react";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      {nome}
      <ul>
        {propriedades.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Produtos = () => {
  return produtos.map((item) => Produto(item));
};

export default Produtos;

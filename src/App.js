import * as React from 'react';
import Home from "./paginas/Home";
import ListaLivros from "./paginas/ListaLivros";
import Shop from "./paginas/Shop";
// import ExcluirLivro from './paginas/ExcluirLivro';
import CadastrarLivros from "./paginas/CadastrarLivros";
// import DetalhesLivros from "./paginas/DetalhesLivros"
import "./App.css";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App ">
      <h1>Biblioteca IFRS Bento Gonçalves Alexsandro Frizon</h1>
      <br/>
      <hr/>
      <br/>
      <div class="card">
      
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listaLivros">Lista Livros</Link>
          </li>
          <li>
            <Link to="cadastrarLivros">Cadastrar Livros</Link>
          </li>
          <li>
            <Link to="DetalhesLivro">Detalhes do Livro</Link>
          </li>
        </ul>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listaLivros" element={<ListaLivros />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cadastrarLivros" element={<CadastrarLivros />} />
      </Routes>
    </div>
    </div>
  )
}
export default App;

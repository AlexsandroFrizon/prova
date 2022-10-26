import React, { useState } from 'react';
import { useFindUsersReducer } from '../hooks/useFindUsersReducer';
import { Routes, Route } from 'react-router-dom';
import ExcluirLivro from '../paginas/ExcluirLivro';
import DetalhesLivros from "../paginas/DetalhesLivros";

function Users() {
    //Cria um estado para o conteúdo da pesquisa
    const [description, setDescription] = useState('');
    //Cria um estado para o conteúdo da pesquisa
    const [search, setSearch] = useState('');
    // use seu próprio hook para carregar os dados da API
    const { state } = useFindUsersReducer(search, description);
    // Desestruture isLoading, data e error de state    
    const { data, loading, error } = state;
    return (
        <div>
            {loading ? <p>Carregando...</p> :
                <ul>
                    {
                        data &&
                        data.length > 0 &&
                        data.map(item => (//Atualiza o estado de search para o id selecionado na lista
                            <li key={item.id} onClick={() => setSearch(item.id)}>


                                {/* <Link to="excluirLivro">Excluir livro</Link>
                                <Link to="detalhesLivros">Detalhes Livros</Link> */}
                                ID: {item.id} Livro: {item.title}
                            </li>
                        ))
                    }
                </ul>}
            {error ? <p>{error}</p> : null}
            <Routes>
                <Route path="excluirLivro" element={<ExcluirLivro />} />
                <Route path="detalhesLivros" element={<DetalhesLivros />} />
            </Routes>
        </div>
    );
}
export default Users;
import React, {useState} from 'react'; 

import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api';
import './styles.css';
import {FiLogIn} from 'react-icons/fi'
import '../../global.css'



import logoImg from '../../assets/logo.svg';

export default function Logon(){

    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault(); //evitar que haja um recarregamento, usado em todos formularios
        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
            
        } catch (error) {
            alert('Falha no Login, tente novamente');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" 
                        value={id} onChange={e => setID(e.target.value)} />

                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                    
                </form>

            </section>
            
        </div>
    )
}
import './App.css';
import { Api } from './actions/api';
import { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown'
import Modal from './components/Modal'

function App() {

    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(true);

    //Apenas esté listo el DOM, cargamos los usuarios para acelerar el evento del modal
    useEffect(() => {
        cargarClientes()
    })

    //Llamado a la api del listado de usuarios
    const cargarClientes = async () => {
        await Api.getUsers()
            .then((response: any) => {
                setUsers(response.data);
            })
            .catch((error: any) => {
                console.log(error);
            })
    }

    //Listado de opciones a modo de ejemplo para dropdown
    const options = [
        { value: 1, label: 'Show Modal' }
    ]

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown
            options={options}
            onSelect={() => {setShowModal(true)}}
        />
        <Modal
            title={'Listado de Usuarios'}
            footer={'Cerrar Modal'}
            show={showModal}
            onClose={() => {setShowModal(false)}}
            items={users}
        />
      </header>
    </div>
  );
}

export default App;

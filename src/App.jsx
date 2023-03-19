import { useState } from 'react';
import logo from './logo.png';
import './App.css';
import MyButton from './components/MyButton';
import ListModal from './components/ListModal';
import { PlusOutlined } from '@ant-design/icons';

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(isModalOpen);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>Bienvenue sur mon application de gestion de listes.</p>
                <MyButton
                    tooltip='Ajouter une liste'
                    onClick={() => setIsModalOpen(true)}
                    icon={<PlusOutlined />}
                >
                    Ajouter une liste
                </MyButton>
                <ListModal
                    modalTitle='Ajouter une liste'
                    isOpen={isModalOpen}
                    handleCancel={() => setIsModalOpen(false)}
                />
            </header>
        </div>
    );
}

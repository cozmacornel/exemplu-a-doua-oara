import React, { useState } from 'react';
import './ListaEchipa.css';
import CardEchipa from './CardEchipa';
import PanouControl from './PanouControl';

function ListaEchipa() {
    const [echipa, setEchipa] = useState([
        {
            id: 1,
            nume: 'Ion Popescu',
            rol: 'Dezvoltator',
            email: 'ion.popescu@example.com',
            telefon: '0123456789',
            imagine: 'https://randomuser.me/api/portraits/men/1.jpg',
            descriere: 'Un dezvoltator pasionat de tehnologie.'
        },
        {
            id: 2,
            nume: 'Maria Ionescu',
            rol: 'Designer',
            email: 'maria.ionescu@example.com',
            telefon: '9876543210',
            imagine: 'https://randomuser.me/api/portraits/women/2.jpg',
            descriere: 'O designer creativ cu un ochi pentru detalii.'
        },
        {
            id: 3,
            nume: 'Alexandru Georgescu',
            rol: 'Manager',
            email: 'alexandru.georgescu@example.com',
            telefon: '0123456789',
            imagine: 'https://randomuser.me/api/portraits/men/3.jpg',
            descriere: 'Un manager experimentat cu abilitati excelente de leadership.'
        },
        {
            id: 4,
            nume: 'Elena Dumitrescu',
            rol: 'Tester',
            email: 'elena.dumitrescu@example.com',
            telefon: '0123456789',
            imagine: 'https://randomuser.me/api/portraits/women/4.jpg',
            descriere: 'O tester meticuloasa cu o atentie deosebita la detalii.'
        },
        {
            id: 5,
            nume: 'Cristian Vasilescu',
            rol: 'Dezvoltator',
            email: 'cristian.vasilescu@example.com',
            telefon: '0123456789',
            imagine: 'https://randomuser.me/api/portraits/men/5.jpg',
            descriere: 'Un dezvoltator talentat cu o pasiune pentru cod.'
        }
    ]);
    const [filtruRol, setFiltruRol] = useState('toate');
    const [sortare, setSortare] = useState('nume');
    const [cautare, setCautare] = useState('');
    const [membriFiltrati, setMembriFiltrati] = useState(echipa);
    React.useEffect(() => {
        let rezultat = [...echipa];
        if (cautare) {
            rezultat = rezultat.filter(m => m.nume.toLowerCase().includes(cautare.toLowerCase())
                || m.rol.toLowerCase().includes(cautare.toLowerCase())
                || m.email.toLowerCase().includes(cautare.toLowerCase()));
        }
        if (filtruRol !== 'toate') {
            rezultat = rezultat.filter(m => m.rol.toLowerCase() === filtruRol.toLowerCase());
        }
        rezultat.sort((a, b) => {
            switch (sortare) {
                case 'nume':
                    return a.nume.localeCompare(b.nume);
                case 'nume-desc':
                    return b.nume.localeCompare(a.nume);
                case 'rol':
                    return a.rol.localeCompare(b.rol);
                case 'rol-desc':
                    return b.rol.localeCompare(a.rol);
                case 'email':
                    return a.email.localeCompare(b.email);
                case 'email-desc':
                    return b.email.localeCompare(a.email);
                default:
                    return 0;
            }
        });
        setMembriFiltrati(rezultat);
    }, [cautare, filtruRol, sortare, echipa]);
    // ...existing code...
    const membriActivi = echipa.filter(m => m.isActiv !== false).length;
    return (
        <div className="lista-echipa-container">
            <h2>Echipa Noastra</h2>
            <PanouControl
                onFilterChange={setFiltruRol}
                onSortChange={setSortare}
                onSearchChange={setCautare}
                totalMembri={echipa.length}
                membriActivi={membriActivi}
            />
            <div className="lista-membri">
                {membriFiltrati.map(m => (
                    <CardEchipa key={m.id}
                        nume={m.nume}
                        rol={m.rol}
                        email={m.email}
                        telefon={m.telefon}
                        imagine={m.imagine}
                        descriere={m.descriere}
                    />
                ))}
            </div>
            {membriFiltrati.length === 0 && <p className="no-results">
                Niciun membru gasit.</p>}
        </div>
    );
}

export default ListaEchipa;

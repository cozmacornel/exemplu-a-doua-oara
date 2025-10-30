import React, { useState } from 'react';
import './CardEchipa.css';
import Modal from './Modal';
function CardEchipa ({nume, rol, email, telefon, imagine,descriere}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isActiv, setIsActiv] = useState(true);

    return(
         <>  <div className={`card-echipa ${isActiv ? '' : 'inactiv'}`}>
                <img src={imagine} alt={nume} className="card-echipa-imagine" />
                <h3 className="card-echipa-nume">{nume}</h3>
                <p className="card-echipa-rol">{rol}</p>
                <button onClick={() => setIsModalOpen(true)} className="btn-detalii">Detalii</button>
                <button onClick={() => setIsActiv(!isActiv)} className="btn-activare">
                {isActiv ? 'Dezactiveaza' : 'Activeaza'}
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
             title={`Detalii despre ${nume}`}>
                
                <h2>{nume}</h2>
                <p><strong>Rol:</strong> {rol}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Telefon:</strong> {telefon}</p>
                {descriere &&(
                    <div className="descriere membru">
                    <h3>Despre:</h3>
                    <p>{descriere}</p>
                    </div>
                )}
                <button onClick={() => setIsModalOpen(false)} className="btn-inchide">Inchide</button>
            </Modal>
        </>
    );
}
export default CardEchipa;
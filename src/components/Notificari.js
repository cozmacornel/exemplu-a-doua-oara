import React, { useState } from 'react';
import './Notificari.css';

function Notificari() {
    const [notificari, setNotificari] = useState([
        { id:1, tip: 'info', mesaj: 'Aceasta este o notificare de informare.', citit: false },
        { id:2, tip: 'success', mesaj: 'Aceasta este o notificare de succes.', citit: false },
        { id:3, tip: 'warning', mesaj: 'Aceasta este o notificare de avertizare.', citit: true},
        { id:4, tip: 'error', mesaj: 'Aceasta este o notificare de eroare.', citit: false }
    ]);
    const [afiseazaToate, setAfiseazaToate] = useState(false);
    const marcheazaCitit = (id) => {
        setNotificari(notificari.map(n => n.id === id ? { ...n, citit: true } : n));
    }
    const notificariFiltrate = afiseazaToate ? notificari : notificari.filter(n => !n.citit);
    const necitite= notificari.filter(n => !n.citit).length;
    return (
        <div className="notificari-container">
            <div className="notificari-header">
                <h3 style={{display: 'flex', alignItems: 'center', margin: 0}}>
                  Notificari
                  <span className="badge" style={{marginLeft: 8}}>{necitite}</span>
                </h3>
                <button onClick={() => setAfiseazaToate(!afiseazaToate)}>
                    {afiseazaToate ? 'Afiseaza Necitite' : 'Afiseaza Toate'}
                </button>
            </div>
            <div className="notificari-list">
                {notificariFiltrate.map(n => (
                    <div key={n.id} className={`notificare ${n.citit ? 'citit' : 'necitit'}`} style={{display: 'flex', alignItems: 'center'}}>
                        {/* Iconița în stânga */}
                        <span style={{marginRight: 8}}>
                          {n.tip==='success' && <span>✅</span>}
                          {n.tip==='info' && <span>ℹ️</span>}
                          {n.tip==='warning' && <span>⚠️</span>}
                          {n.tip==='error' && <span>❌</span>}
                        </span>
                        <span className={`notificare-tip ${n.tip}`}>{n.tip}</span>
                        <span className="notificare-mesaj" style={{marginLeft: 8}}>{n.mesaj}</span>
                        {!n.citit && <button onClick={() => marcheazaCitit(n.id)} style={{marginLeft: 'auto'}}>Marcheaza ca citit</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Notificari;
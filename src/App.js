import React, { useState } from 'react';
import './App.css';
import Notificari from './components/Notificari';
import ListaEchipa from './components/ListaEchipa';
import StatusMembru from './components/StatusMembru';


function App() {
  const [tema, setTema] = useState('light');
  const [showNotification, setShowNotification] = useState(false);
  React.useEffect(() => {
    document.body.className = tema;
  }, [tema]);
  return (
    <div className={`App-container${tema === 'dark' ? ' dark' : ''}`}>
      <header className="App-header">
        <h1>Meu Aplicativo React</h1>
        <div className="right-buttons">
          <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}
            style={{
              backgroundColor: tema === 'light' ? '#f0f0f0' : '#333',
              color: tema === 'light' ? '#000' : '#fff',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
            Alternar Tema
            {tema === 'light' ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setShowNotification(!showNotification)}>
            Notificari
          </button>
        </div>
      </header>
      {showNotification && <Notificari />}
      <div className="App-content">
        <p>Acesta este continutul principal al aplicatiei.</p>
      </div>
      <ListaEchipa />
  <StatusMembru status="online" nume="Ion Popescu" ultimaActivitate="Acum 5 minute" />
      <StatusMembru status="inactiv" nume="Maria Ionescu" ultimaActivitate="Acum 2 ore" />
      <StatusMembru status="ocupat" nume="Vasile Georgescu" ultimaActivitate="Acum 30 minute" />
      <div className="summary-section">
        <h2>Rezumat Concepte Implementate</h2>
        <div className="concepts-grid">
          <div className="concept-card">
            <h3>Children Props</h3>
            <p>Modalul primeste continut dinamic prin Children</p>
          </div>
          <div className="concept-card">
            <h3>Callback Props</h3>
            <p>PanouControl comunica cu parintele prin callbacks</p>
          </div>
          <div className="concept-card">
            <h3>Liste & Keys</h3>
            <p>Map() cu key unic pentru fiecare element</p>
          </div>
          <div className="concept-card">
            <h3>Conditional Rendering</h3>
            <p>Afisare diferita bazata pe state si props</p>
          </div>
          <div className="concept-card">
            <h3>Stilizare Conditionata</h3>
            <p>Clase si stiluri dinamice bazate pe conditii</p>
          </div>
        </div>

      </div>
      <footer className="App-footer">
        <p>&copy; 2024 Meu Aplicativo React. Toate drepturile rezervate.</p>
      </footer>
    </div>
  )
}
export default App;

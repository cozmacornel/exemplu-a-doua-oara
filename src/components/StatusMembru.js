import React from 'react';
import './StatusMembru.css';
function StatusMembru({status, nume, ultimaActivitate}) {
    const getStatusClass = () => {
        switch (status) {
            case 'activ':
                return 'status-activ';
            case 'inactiv':
                return 'status-inactiv';
            case 'ocupat':
                return 'status-ocupat';
            default:
                return '';
        }
    };
    const getStatusIcon = () => {
        switch (status) {
            case 'activ':
                return '🟢';
            case 'inactiv':
                return '🔴';
            case 'ocupat':
                return '🟡';
            default:
                return '⚪';
        }
    };
    const statusStyle={
        backgroundColor: status ==='activ' ? '#d4edda' : status ==='inactiv' ? '#f8d7da' : status ==='ocupat' ? '#fff3cd' : '#e2e3e5',
        color: status ==='activ' ? '#155724' : status ==='inactiv' ? '#721c24' : status ==='ocupat' ? '#856404' : '#383d41',
        border: status ==='activ' ? '1px solid #c3e6cb' : status ==='inactiv' ? '1px solid #f5c6cb' : status ==='ocupat' ? '1px solid #ffeeba' : '1px solid #d6d8db',
    }
    const getStatusMessage = () => {
        if (status === 'activ') {
            return `Membru activ - Ultima activitate: ${ultimaActivitate}`;
        }else if (status === 'inactiv') {
            return `Membru inactiv - Ultima activitate: ${ultimaActivitate}`;
        } else if (status === 'ocupat') {
            return `Membru ocupat - Ultima activitate: ${ultimaActivitate}`;
        }
        return 'Status necunoscut';
    };
    return (
        <div className={`status-membru ${getStatusClass()}`} style={statusStyle}>
            <div className="status-left">
                {status==='online' &&(
                    <button className="btn-chat">Contacteaza</button>
                )}
                {status==='inactiv' &&(
                    <button className="btn-rezerva">Rezerva</button>
                )}
                {status==='ocupat' &&(
                    <button className="btn-notifica">Notifica cand e liber</button>
                )}
            </div>
            <div className="status-center">
                <span className="status-nume">{nume}</span>
                <span className="status-message">{getStatusMessage()}</span>
            </div>
            <div className="status-right">
                <span className="status-icon">{getStatusIcon()}</span>
            </div>
        </div>
    );
}

export default StatusMembru;

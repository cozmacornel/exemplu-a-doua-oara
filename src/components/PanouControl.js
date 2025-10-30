import React from 'react';
import './PanouControl.css';

function PanouControl({
    onFilterChange,
    onSortChange,
    onSearchChange,
    totalMembri,
    membriActivi
}){
    const handleFilterChange = (e) => {
        onFilterChange(e.target.value);
    }
    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    }
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    }
    return(
        <div className="panou-control">
            <h2>Panou de Control Echipa</h2>
            <div className="panou-control-info">
                <p>Total Membri: {totalMembri}</p>
                <p>Membri Activi: {membriActivi}</p>
            </div>
            <div className="panou-control-filters">
                <div className="search-group">
                <label htmlFor="search">Cauta membri:</label>
                <input
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                    placeholder="Cauta dupa nume..."
                />
                </div>
                <div className="filter-group">
                <label htmlFor="filter">Filtreaza dupa rol:</label>
                <select id="filter" onChange={handleFilterChange} defaultValue="">
                    <option value="toate">Toate</option>
                    <option value="dezvoltator">Dezvoltator</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="tester">Tester</option>
                </select>
                </div>
                <div className="sort-group">
                <label htmlFor="sort">Sorteaza dupa:</label>
                <select id="sort" onChange={handleSortChange} defaultValue="">
                    <option value="nume">Nume(A-Z)</option>
                    <option value="nume-desc">Nume(Z-A)</option>
                    <option value="rol">Rol</option>
                </select>
                </div>
            </div>
        </div>
    )
}
export default PanouControl;
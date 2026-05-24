function FilterBar({
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    sortOption,
    setSortOption,
}) {
    return (
    <section className="filters">
        <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
        >
            <option>Todas</option>
            <option>Pendiente</option>
            <option>En Progreso</option>
            <option>Completada</option>
        </select>

        <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
        >
            <option>Todas</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
        </select>

        <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
        >
            <option value="fechaReciente">Más recientes</option>
            <option value="tituloAZ">Título A-Z</option>
            <option value="tituloZA">Título Z-A</option>
        </select>
    </section>
    );
}

export default FilterBar;

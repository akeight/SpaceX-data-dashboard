const ChartsCard = ({ title, children }) => {
    return ( 
        <div className="charts-card">
            <h3>{title}</h3>
            <div className="charts-content">{children}</div>
        </div>
     );
}

export default ChartsCard;

const DetailView = ({ launchpads }) => {
    return ( 
        <><h2>Launch Details</h2>
        <p>Details about the selected launch will be displayed here.</p>
        <h3>Launchpad Information</h3>
        <ul>
          {launchpads.map(lp => (
            <li key={lp.id}>{lp.name}</li>
          ))}
        </ul>
        </>
     );
}

export default DetailView;

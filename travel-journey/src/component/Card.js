
export default function Card(props) {
    return(
        
        <div className="card">
          <img src={props.imageUrl} className="main-img" width="125px" /> 
          <div className="card-title">
                <div className="card-content">
                <span class="material-symbols-outlined" id="ICON">location_on
                </span>
                <h5>{props.location}</h5> 
                <span>
    <a href={props.googleMapsUrl}>View on Google Maps</a></span>

                    <h3>{props.title}</h3>
            </div>
            <div className="card-description">
                <p>{props.startDate}-{props.endDate}</p>
                <p>{props.description}</p>
            </div>
                    

            </div>
            
        </div>

    );
}
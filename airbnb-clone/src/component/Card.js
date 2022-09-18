
  import star from "./img/Star 1.png";
 

  export default function Card(props) {
      let badgeText
      if (props.openSpots===0) {
        badgeText="SOLD OUT"
      } 
      else if (props.location==="Online") {
            badgeText="Online"
      } 
    
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`}></img>
            <div className="stats">
                <span><img src={star}></img></span>
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) .</span>
                <span className="grey">{props.location}</span>
            </div>
            <div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price} /</span> person</p>

            </div>
        </div>
    );
  }
  
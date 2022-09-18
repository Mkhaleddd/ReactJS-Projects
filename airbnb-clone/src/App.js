
import './App.css';
import Header from "./component/Header";
import HeroSection from './component/HeroSection';
import Card from './component/Card';
import data from "./component/data"

function App() {
  const dataCards=data.map(x=> {
  return (
  <Card 
    key={x.id}
    {...x}
    // img={x.coverImg}
    // rating={x.stats.rating}
    // reviewCount={x.stats.reviewCount}
    // location={x.location}
    // title={x.title}
    // price={x.price}
    // openSpots={x.openSpots}

    />
    )
  })

  return ( 
    <div>
    <Header /> 
    <HeroSection />
    <div className="card-list">
     {dataCards}   
    </div>

    </div>
  );
}

export default App;

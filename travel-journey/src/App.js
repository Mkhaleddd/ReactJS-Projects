import Header from "./component/Header.js";
import Card from "./component/Card.js";
import Data from "./component/data.js";
import './App.css';

function App() {
  const cardData =Data.map(  x =>{
    return (
      <Card 
        key={x.id}
        {...x}

              />
    );
  })
  return (
    <div>
    <Header />
    <section className="class-list">
      {cardData}
    </section>
    
    </div>
  );
}
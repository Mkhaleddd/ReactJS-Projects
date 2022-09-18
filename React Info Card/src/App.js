
import './App.css';
import Header from './Component/Header'; 
import MainContent from './Component/MainContent';






function Page() {
  return (
      <div classNAME="container">
          <Header />
          <MainContent />
          
      </div>
  )
}




function App() {
  return (
    <Page />
  );
}

export default App;

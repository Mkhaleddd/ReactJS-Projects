
import icon from "/Users/ghani/Desktop/gitpages/React Projects/business-card/src/img/Icon.png"
import img from "/Users/ghani/Desktop/gitpages/React Projects/business-card/src/img/main-pic.jpg"


export default  function Intro() {
    return (
      <div className="intro">
     <img id="main-pic" src={img} ></img>
     <h1>Mariam Khaled</h1>
     <h2>Frontend Developer</h2>
     <h3><a>my website</a></h3>
     <button ><a href="maltio:https://www.mariamkhaled709@gmail.com/"target="_blank"><img src={icon}></img>Email</a></button>
     </div>
    );
  }
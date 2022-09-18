import img1 from "/Users/ghani/Desktop/gitpages/React Projects/business-card/src/img/Facebook Icon.png"
import img2 from "/Users/ghani/Desktop/gitpages/React Projects/business-card/src/img/GitHub Icon.png"
import img3 from "/Users/ghani/Desktop/gitpages/React Projects/business-card/src/img/Instagram Icon.png"
import img4 from "/Users/ghani/Desktop/gitpages/React Projects/business-card/src/img/Linkedin Icon.png"


export default  function Contact() {
    return (
     <div className="contact">
      <a href="">
        <img src ={img1}>
      </img>
      </a>
      <a href="https://github.com/Mkhaleddd">
      <img src ={img2}>
      </img>
      </a>
      <a href="https://www.instagram.com/_mariemkhalid/">
      <img src ={img3}>
      </img>
      </a>
      <a href="https://www.linkedin.com/in/mariam-khaled-161449250/">
        <img src ={img4}>
      </img>
      </a>
     </div>
    );
  }
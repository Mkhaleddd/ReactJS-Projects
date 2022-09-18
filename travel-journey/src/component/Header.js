
import logo from "./img/Fill 213.png"


export default function Header() {
    return(

            <header>
                <nav className="nav">
                  <ul><li>
                  <img src={logo} className="nav-logo" width="40px" />
                  <span>my travel journal</span>
                  </li>
                  </ul>              
                </nav>  

            </header>

    );
}
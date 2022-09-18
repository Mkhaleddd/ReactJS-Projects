import  logo from "./logo.svg"



 export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" width="80px" /> <p>React Facts</p> 
                <ul className="nav-items">
                    <li>First Project</li>
                </ul>
                    
            </nav>
        </header>
    )
  }
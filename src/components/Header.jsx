import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav className="header" style={{display: "flex", gap: "20px"}}>
                <p>
                    <Link to="">Home</Link>
                </p>
                <p>
                    <Link to="first">Forward Chaining: Disney</Link>
                </p>
                <p>
                    <Link to="second">Backward Chaining: Disney</Link>
                </p>
            </nav>
        </header>
    )
}
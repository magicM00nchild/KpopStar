import { useNavigate } from "react-router-dom";
import "./Header.css"
import InputForm from "./InputForm"
import logo from "../data/logo_kpop_star.svg"

const Header = () => {
    const navigate = useNavigate();


    return (
        <header className="header">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              onClick={() => navigate('/')}
            />
            <div className="input-container">
                <InputForm />
            </div>
          </header>
    )

}
export default Header
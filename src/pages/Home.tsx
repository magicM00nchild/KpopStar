import InputForm from "../utils/InputForm";
import logo from "../data/logo_kpop_star.svg"
import "./Home.css"

const Home = () => (
    <div className="home-container">
        <img src={logo} alt="Logo" width={300} height={300} />
        <h1>Kpopstar</h1>
        <p>Bist du so ein krasser Kpop Fan?</p>
        <InputForm />
    </div>
  );

export default Home;

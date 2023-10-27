import logo from "../assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>Kalkulator Investasi</h1>
    </header>
  );
}

import logoProject from "../../images/logo.png";
import logoTeam from "../../images/nombre-equipo.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoTeam} alt="Logo Equipo" className="footer__image" />
      <img src={logoProject} alt="Logo Adalab" className="footer__image logo" />
    </footer>
  );
}
export default Footer;

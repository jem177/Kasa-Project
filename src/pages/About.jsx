import aboutIMG from "../assets/images/aboutIMG.png";
import { Dropdown } from "../component/Dropdown";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-background">
        <img src={aboutIMG} alt="about background image" />
      </div>
      <div className="about-menus">
        <div className="about-listeBTN">
          <Dropdown title="Fiabilité" className="about-button">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité
              totale.Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Dropdown>
          <Dropdown title="Respect" className="about-button">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa.Tout
              comportement discriminatoire ou de perturbation du voisinage
              entrainera une exclusion de notre platefrome.
            </p>
          </Dropdown>
          <Dropdown title="Service" className="about-button">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa.Tout
              comportement discriminatoire ou de perturbation du voisinage
              entrainera une exclusion de notre platefrome.
            </p>
          </Dropdown>
          <Dropdown title="Sécurité" className="about-button">
            <p>
              La sécutité est la priorité de Kasa. Aussi bien pour nos hotes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hote qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hotes.Nous
              organisons également des ateliers sur la sécurité domestique pour
              nos hôtes.
            </p>
          </Dropdown>
        </div>
      </div>
    </section>
  );
}

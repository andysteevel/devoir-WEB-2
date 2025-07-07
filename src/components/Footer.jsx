import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return <div className="flex-col bg-blue-950 text-white px-20 py-10 text-left">
        <img src="src/assets/logo.png" alt="" className="w-20"/>
        <div className="flex justify-between gap-10 text-white text-sm">
            <div className="w-45 leading-7">
                <p>
                    Formation habilitée par l'Etat suivant le système LMD
                </p>
                <br />
                <p>
                    Habilitation MESupRes n°31309/2023
                </p>
            </div>
            <div className="w-45 leading-10">
                <h3 className="font-bold text-xl">Adresse</h3>
                <p>
                    II J R Ambodivoanjo Ivandry Antananarivo 101, Madagascar
                </p>
            </div>
            <div className="flex-col justify-between w-45 leading-10">
                <h3 className="font-bold text-xl">Navigation</h3>
                <ul>
                    <li><a href=""></a>Acceuil</li>
                    <li><a href=""></a>Actualités</li>
                    <li><a href=""></a>Bourse d'études</li>
                    <li><a href=""></a>Inscription</li>
                </ul>
            </div>
            <div className="w-45">
                <h3 className="font-bold text-xl">Médias sociaux</h3>
                <br />
                <div className="flex justify-between">
                    <div className="bg-yellow-500 font-bold p-3 rounded-full"><FaFacebook className="text-2xl"/></div>
                    <div className="bg-yellow-500 font-bold p-3 rounded-full"><FaLinkedin className="text-2xl"/></div>
                    <div className="bg-yellow-500 font-bold p-3 rounded-full"><FaInstagram className="text-2xl"/></div>
                </div>
            </div>
        </div>
    </div>
}
export default Footer;
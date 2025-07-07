function Admission() {
    return <div className="px-60 py-10 bg-indigo-300">
        <div>
            <h1 className="text-4xl text-white font-bold">Admission</h1>
            <br />
            <p className="text-white">
                Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :

une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. 
            </p>
        </div>
        <br />
        <div className="text-white flex px-30 justify-center">
            <div className="w-80 text-left bg-yellow-100 px-3 py-2">
                <h2 className="text-5xl font-bold">01</h2>
                <br />
                <p className="text-blue-950 font-bold max-w-60">
                    Dépôt de dossiers : pour les bacheliers de toutes séries sans limite d’âge
                </p>
            </div>
            <div className="w-80 text-left bg-yellow-200 px-3 py-2">
                <h2 className="text-5xl font-bold">02</h2>
                <br />
                <p className="text-blue-950 font-bold max-w-60">
                    Test de niveau : composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D
                </p>
            </div>
            <div className="w-80 text-left bg-yellow-300 px-3 py-2">
                <h2 className="text-5xl font-bold">03</h2>
                <br />
                <p className="text-blue-950 font-bold ">
                    Inscription définitive (si test réussi)
                </p>
            </div>
        </div>
        <br />
            <div className="flex justify-center gap-5">
                <button className="border-2 text-white p-0.5 rounded-md px-1">Inscrivez-vouis ici</button>
                <button className="bg-blue-950 text-white p-0.5 rounded-md px-1">Résultats concours</button>
            </div>
    </div>
}
export default Admission;
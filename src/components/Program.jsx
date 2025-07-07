function Program() {
    return <div>
        <div className="flex justify-center items-center py-10 gap-3">
            <img src="src/assets/hei.webp" alt="" className="w-80" />
            <div className="text-left items-center">
                <h1 className="text-4xl text-blue-950 font-bold">Le programme pédagogique</h1>
                <br />
                <p className="text-blue-950 max-w-xl ">
                    Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
                </p>
                <br />
                <button className="py-0.5 px-1 border-2 border-blue-950 text-blue-950">Notre programme</button>
            </div>
        </div>
        <br />
        <div className="flex justify-center gap-5 flex-1/2 items-stretch">
            <div className=" bg-yellow-100 text-blue-950 font-bold text-xl w-45 text-left p-5 rounded-md">
                <h2 className="text-5xl font-bold text-yellow-400">25%</h2>
                <p>
                    Apprentissage théoriques en présentiel
                </p>
            </div>
            <div className=" bg-yellow-100 text-blue-950 font-bold text-xl w-45 text-left p-5 rounded-md">
                <h2 className="text-5xl font-bold text-yellow-400">25%</h2>
                <p>
                    Apprentissage sur supports numériques
                </p>
            </div>
            <div className=" bg-yellow-100 text-blue-950 font-bold text-xl w-45 text-left p-5 rounded-md">
                <h2 className="text-5xl font-bold text-yellow-400">25%</h2>
                <p>
                    Travaux individuels de l’étudiant
                </p>
            </div>
            <div className=" bg-yellow-100 text-blue-950 font-bold text-xl w-45 text-left p-5 rounded-md">
                <h2 className="text-5xl font-bold text-yellow-400">25%</h2>
                <p>
                    Apprentissage en entreprise
                </p>
            </div>
        </div>
        <br />
        <div className="">
            <ul className="flex justify-center gap-5">
                <li><img src="src/assets/Mask-group-1-600x649.webp" alt="" className="w-80" /></li>
                <li><img src="src/assets/Mask-group-2.webp" alt="" className="w-80" /></li>
                <li><img src="src/assets/Mask-group-3.webp" alt="" className="w-80" /></li>
            </ul>
        </div>
        <br />
    </div>
}
export default Program;
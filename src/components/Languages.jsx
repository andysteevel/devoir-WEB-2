function Languages() {
    return <div className="px-60 py-10 bg-gray-100">
        <div>
            <h1 className="text-4xl text-blue-950 font-bold">Les technos et langages utilisées</h1>
        <br />
        <p className="text-blue-950">
            Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
        </p>
        </div>
        <br />
        <div className="mx-60 items-center">
            <ul className="flex flex-wrap gap-15 items-center">
                <li><img src="src/assets/Java.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/python.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/JS.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/C.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/TS.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/docker.png" alt="" className="w-25" /></li>
                <li><img src="src/assets/next.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/aws.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/serverless.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/react.png" alt="" className="w-22" /></li>
                <li><img src="src/assets/openapi.png" alt="" className="w-25" /></li>
            </ul>
        </div>
    </div>
}
export default Languages;
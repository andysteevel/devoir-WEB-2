import React from 'react';
import logo from './assets/logo.jpg';
import groupe from './assets/groupe.png';
import chapeau from './assets/chapeau.png';
import profil from './assets/profil.png';
import etoile from './assets/etoile.png';
import fille from './assets/fille.png';
import empreinte from './assets/empreinte.png';
import  AI from './assets/AI.png';
import code from './assets/code.png';
import julien from './assets/julien.png';
import ryan from './assets/ryan.png';
import maxa from './assets/maxa.png';

function App() {
  return (
    <>
      {/* Navbar avec fond bleu */}
      <nav className="bg-blue-950 p-2.5 ">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center h-16">
            {/* Logo à gauche */}
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 w-auto rounded-sm" 
              />
            </div>
            
            {/* Liens à droite */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-white hover:text-yellow-600 px-3 py-2  text-lg font-medium">ACCEUIL</a>
              <a href="#" className="text-white hover:text-yellow-600 px-3 py-2  text-lg font-medium">BOURSES D'ETUDES</a>
              <a href="#" className="text-white hover:text-yellow-600 px-3 py-2  text-lg font-medium">INSCRIPTION</a>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md text-lg font-medium ml-4">
                INTRENET
              </button>
            </div>


          </div>
        </div>
      </nav>
      
      {/* Contenu principal */}
      <main className=" bg-[url('./assets/fond.jpg')] bg-cover bg-center bg-no-repeat h-165 w-full">
        <div className="flex-block text-center mx-[15%] h-64 pt-20 space-y-30">

        <div><h1 className='text-white text-5xl font-serif '>HAUT ECOLE D'INFORMATIQUE</h1></div>
        <div>
          <p className='text-white text-3xl'>Des entreprises partenaires, et d'une équipe pédagogique et administrative
           qui travail sans relache pour la montée en compétence de nos étudiants.</p>
        </div>
        <div className='space-x-35'>
          <button className="bg-white text-blue-900 px-4  py-2 rounded-md text-lg font-medium ml-4">Inscrivez-vous ici</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md text-lg font-medium ml-4">Emploi du temps</button>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-lg font-medium ml-4">Programme pédagogique</button>
        </div>
        <div>
          <p className='text-white text-3xl'>Habilitation MESupRES, suivant l'arreté n^31309/2023</p>
        </div>          
          </div>

      </main>

      <main className='flex flex-row items-center pt-20 '>

        <div>   
              <img 
                src={groupe} 
                alt="groupe" 
                className=" h-150 w-auto rounded-sm ml-50" 
              />
        </div>

        <div className='flex-block space-y-5 pl=6'>
          <h1 className=' text-6xl font-serif text-blue-950 '>A propos de nous </h1>
          <div>
            <div className='flex flex-row items-center'>
              <img src={chapeau} alt="" />
              <h2 className='text-3xl font-medium text-blue-950'>+3ans</h2>
            </div>
            <div>
                <p className='text-1xl w-160 break-words p-5 text-blue-950'>
                  Depuis 3 ans, nous formons ceux qui décodent le futur,aux métiers de l’informatique.
                   Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique 
                   de Madagascar et du monde entier.
                </p>
            </div>      
          </div>

          <div>
            <dic className='flex flex-row items-center'>
              <img src={profil} alt="" />
              <h2  className='text-3xl font-medium text-blue-950'>+250 étudiants</h2>
            </dic>
            <dic>
                <p className='text-1xl w-160 break-words p-5 text-blue-950'>
                  Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation 
                  habilitée par l’État malgache. 
                  Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
                </p>
            </dic> 
          </div>

          <div>
            <div className='flex flex-row items-center'>
              <img src={etoile} alt="" />
            <h2 className='text-3xl font-medium text-blue-950'>Notre mission</h2>
            </div>
            <div>
              <p className='text-x1l w-160 break-words p-5 text-blue-950 '>
                Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle,
                 la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
              </p>
            </div> 
          </div>

        </div>
      </main>


      <main className=' bg-blue-500 flex-block items-center pt-20 space-y-10 pb-7'>
        <div className='flec-block text-center items-center space-y-10'>
        <div>
          <h3 className=' text-6xl font-serif text-white '>L'équipe pédagogique</h3>
          </div>
        <div>
          <p className='text-x1l  text-white w-305 pl-50'>Notre équipe pédagogique se compose d’experts nationaux 
            et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, 
            dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence.
             Nous sommes conscients que cette équipe est la pierre angulaire 
             de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</p>
        </div>          
        </div>

        <div className='flex flex-row space-x-15 pl-55'>
          <div className='bg-white rounded-l-3xl rounded-3xl jusitify-center'>
            <div>
                <img src={julien} alt="" className='rounded-full'/>
            </div>
            <div  className='flex-block text-x1l text-center w-75 break-words p-5 text-blue-950 space-y-5 '>
              
                <h3 className='text-blue-950 text-2xl font-medium'>Julien RAJERISON</h3>  
              <p>Lead Développeur | Fondateur de l’association Techzara Madagascar</p>
            </div>
          </div>

          <div className='bg-white rounded-l-3xl rounded-3xl jusitify-center'>
          <div>
              <img src={ryan} alt="" className='rounded-full'/>
          </div>
          <div className='flex-block text-x1l text-center w-75 break-words p-5 text-blue-950 space-y-5 '>
           <h3 className='text-blue-950 text-2xl font-medium'> Ryan ANDRIAMAHERY</h3> 
          <p>Développeur back end | Cofondateur et Directeur des opérations de HEI</p>
          </div>
          </div>

          <div className='bg-white rounded-l-3xl rounded-3xl jusitify-center'>
            <div>
              <img src={maxa} alt="" className='rounded-full'/>
            </div>
            <div className='flex-block text-x1l text-center w-75 break-words p-5 text-blue-950 space-y-5 '>
              
                <h3  className='text-blue-950 text-2xl font-medium'>Jean Aimé Maxa</h3>
                <p>Responsable technique cybersécurité chez CES France Continental (Toulouse – France)</p>

              
            </div>
          </div>
        </div>
      </main>

      <main className='flex flex-row items-center pt-20 ml-50 '>
        <div>
          <div>
            <h2 className=' text-6xl font-serif text-blue-950 '>
              Quelques débouchés
            </h2>
          </div>
          <div className='flex-block space-y-15'>
          <div>
            <p className='text-x1l w-160 break-words p-5 text-blue-950 '>
              Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation 
              (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
            </p>
          </div>
          <div>
            <p className='text-x1l w-160 break-words p-5 text-blue-950 '>
             Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité,
              pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
            </p>
          </div>
          </div>
        </div>
        <div>
          <img src={fille} alt=""  className='h-125'/>
        </div>
      </main>

      <main className=' bg-gray-100 flex-block items-center pt-20 space-y-10 pb-7'>
        <div className='text-center space-y-10'>
        <div>
          <h3 className=' text-6xl font-serif text-blue-950 '>Domaines</h3>
          </div>
        <div>
          <p className='text-x1l  text-blue-950 '>Au cours de vos trois ans de formation, 
            naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
        </div>          
        </div>

        <div className='flex flex-row space-x-15 pl-55'>
          <div className='bg-white rounded-l-3xl rounded-3xl jusitify-center'>
            <div>
              <img src={empreinte} alt="" className='rounded-full'/>
            </div>
            <div  className='flex-block text-x1l text-center w-75 break-words p-5 text-blue-950 space-y-5 '>
              
                <h3 className='text-yellow-700 text-2xl font-medium'>Cloud et cybersécurité</h3>  
               <p> Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages 
                (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes 
                et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine
                   du cloud et de la cybersécurité.
              </p>
              
            </div>
          </div>

          <div className='bg-white rounded-l-3xl rounded-3xl jusitify-center'>
          <div>
            <img src={AI} alt="" className='rounded-full'/>
          </div>
          <div className='flex-block text-x1l text-center w-75 break-words p-5 text-blue-950 space-y-5 '>
           <h3 className='text-yellow-700 text-2xl font-medium'> Intelligence artificielle</h3> 
              <p> Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ?
               Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.</p>
          </div>
          </div>

          <div className='bg-white rounded-l-3xl rounded-3xl jusitify-center'>
            <div>
              <img src={code} alt="" className='rounded-full'/>
            </div>
            <div className='flex-block text-x1l text-center w-75 break-words p-5 text-blue-950 space-y-5 '>
              
                <h3  className='text-yellow-700 text-2xl font-medium'>Ingénierie logicielle</h3>
                 <p>Apprenez les principes de la conception ou le développement de programmes et d’applications web et 
                 mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes
                  à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour 
                  leurs besoins numériques.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
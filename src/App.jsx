import Header from "/src/header.jsx";
import Entry from "/src/Entry.jsx";
import Jornals from "/src/index.js"

export default function App(){ 
  const jornalDetails =  Jornals.map( Jornal =>{
        return <Entry
          key = {Jornal.id}
          {...Jornal}
        />
    })
  return(
    <>
      <Header/>
      <main>
        {jornalDetails}        
      </main>
    </>
  )
}

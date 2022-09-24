import SpecialCard from "./components/SpecialCard"
import UsualCard from "./components/UsualCard";


function App() {
  return (
    <div className="flex flex-col items-center bg-main" >
      <header >
   
        <p className="text-2xl font-bold text-center justify-center">
          Hello, comande
        </p>
        <UsualCard/>
        <SpecialCard/>

      </header>


    </div>
  );
}

export default App;

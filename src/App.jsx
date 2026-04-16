import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Regards from "./components/regards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Regards nameRegards="rogerio3!" id={2} />
        <section>
          <h1>Bem vindo ao Sistema de Avaliação da A3!</h1>
        </section>
        <section>
          <p className="p">Todas as avaliações estão prontas</p>
        </section>
        <br />
        <Footer />
        <br />{" "}
      </div>
    </>
  );
}

export default App;

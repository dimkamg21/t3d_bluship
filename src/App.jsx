import { Team } from "./components/Team/Team";
import { Stats } from "./components/Stats/Stats";
import { Network } from "./components/Network/Network";
import { PreFooter } from "./components/PreFooter/PreFooter";
import { Footer } from './components/Footer/Footer';
import StarryBackground from "./components/StarryBackground/StarryBackground";
import "./App.scss";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <StarryBackground />

          <main>
            <Network />
            <Stats />
            <Team />
          </main>
        </div>
      </div>

      <PreFooter />

      <Footer />
    </>
  );
}

export default App;

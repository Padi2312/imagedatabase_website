import Header from './components/Header';
import HttpRequester from './core/HttpRequester';
import LandingPage from './landingpage/LandingPage';

function App() {

  new HttpRequester().get("/api")
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;

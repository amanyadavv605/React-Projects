import "./App.css";
import RandomColorGenerator from "./components/randomColorGenerator/index.jsx";

function App() {
  return (
    <div className="app-container">
    <h1>Visit any of the project.</h1>
    <div className="button-container">
      <div className="accordion-project">
          <a href="/accordion">Accordion</a>
      </div>
      <div className="random-color-generator">
          <a href="/random-color-generator">Random Color Generator</a>
      </div>
      <div className="star-rating-system">
          <a href="/star-rating-system">Star Rating System</a>
      </div>
      <div className="star-rating-system">
          <a href="/star-rating-system">Star Rating System</a>
      </div>
      <div className="star-rating-system">
          <a href="/star-rating-system">Star Rating System</a>
      </div>
      <div className="star-rating-system">
          <a href="/star-rating-system">Star Rating System</a>
      </div>
      <div className="star-rating-system">
          <a href="/star-rating-system">Star Rating System</a>
      </div>
      </div>
    </div>
  );
}

export default App;

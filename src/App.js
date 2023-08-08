import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <TrackingFilter />
        <TrackingList />
      </main>
    </>
  );
}

function Header() {
  const appTitle= "ID-trackR";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo245.png" alt="ID-TrackR" />
        <h1>{appTitle}</h1>
      </div>

      <form className="search-bar">
        <input type="text" className="search-input" placeholder="Search Orders" />
        <button className="search-button">
          <svg className="search-icon">
            <use xlinkHref="sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>

      <div className="profile">
        <img src="profile-img.jpg" alt="profile-pic" />
      </div>
    </header>
  );
}

function TrackingFilter() {}

function TrackingList() {}


export default App;

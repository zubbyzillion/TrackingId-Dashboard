// import { useState } from 'react';
import './style.css';

function App() {
  return (
    <>
      <main className="main">
        <Navigation />
        <div className="tracking-section">
          <SearchComp />
          <TrackingList />
        </div>
      </main>
    </>
  );
}

function SearchComp() {


  return (
    <main className="search-comp">


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
    </main>
  );
}

const sideLinks = [
  { text: "Analytics", link: "/analytics" },
  { text: "Orders", link: "/orders" },
  { text: "Notifications", link: "/notifications" },
];

// const orderStats = [
//   { total: 360, status: "success", color: "#16a34a" },
//   { total: 44, status: "pending" , color: "#eab308" },
//   { total: 24, status: "cancelled", color: "#ef4444" },
// ];

function Navigation() {
  const appTitle= "Id-Tracker";

  return (
    <aside className="nav-bar">
      <div className="logo">
        <img src="logo245.png" alt="ID-Tracker" />
        <h1>{appTitle}</h1>
      </div>

      <ul className="navigation-list-items">
        <li className="nav-list">
          <a className="btn btn-active" href="/dashboard" target="_blank" rel="noreferrer"><span>Dashboard</span></a>
        </li>

        {sideLinks.map((sideLinks) => <li key={sideLinks.text} className="nav-list">
          <a className="btn" href={sideLinks.link}><span>{sideLinks.text}</span></a>
        </li> )}
      </ul>

      <div className="logout">
        <li className="nav-list"><a className="btn btn-logout" href="/logout" target="_blank" rel="noreferrer">Logout</a></li>
      </div>
    </aside>
  );
}

function TrackingList() {
  return (
    <main className="tracking-comp">
      Order Information
    </main>
  );
}


export default App;

import { useState } from 'react';
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
  const appTitle= "Id-Tracker";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo245.png" alt="ID-Tracker" />
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

const sideLinks = [
  { text: "Analytics", link: "/analytics" },
  { text: "Orders", link: "/orders" },
  { text: "Notifications", link: "/notifications" },
]

const orderStats = [
  { total: 360, status: "success", color: "#16a34a" },
  { total: 44, status: "pending" , color: "#eab308" },
  { total: 24, status: "cancelled", color: "#ef4444" },
]

function TrackingFilter() {
  return (
    <aside className="nav-bar">
      <ul>
        <li className="nav-list">
          <a className="btn btn-active" href="/dashboard" target="_blank" rel="noreferrer"><span>Dashboard</span></a>
        </li>

        {sideLinks.map((sideLinks) => <li key={sideLinks.text} className="nav-list">
          <a className="btn" href={sideLinks.link}><span>{sideLinks.text}</span></a>
        </li> )}
      </ul>
    </aside>
  );
}

function TrackingList() {
  return (
    <main className="info-bar">
      Order Information
    </main>
  );
}


export default App;

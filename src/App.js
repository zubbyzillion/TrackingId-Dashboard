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
  { text: "Dashboard", link: "https:google.com" },
  { text: "Orders", link: "https:google.com" },
  { text: "Notifications", link: "https:google.com" },
]

const orderStats = [
  { total: 360, status: "success", color: "#16a34a" },
  { total: 44, status: "pending" , color: "#eab308" },
  { total: 24, status: "cancelled", color: "#ef4444" },
]

function TrackingFilter() {
  return (
    <aside className="nav-bar">
      Nav Bar
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

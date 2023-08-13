// import { useState } from 'react';
import './style.css';

function App() {
  return (
    <>
      <main className="main">
        <Navigation />
        <div className="tracking-section">
          <div className="search-section">
          <SearchComp />
          </div>
          <div className="orders-section">
          <OrderStatsList />
          </div>
          <div className="order-list-section">
            <FilterListCategory />
          </div>
        </div>
      </main>
    </>
  );
}

function SearchComp() {


  return (
    <main className="search-comp">


      <form className="search-bar">
        <input type="text" className="search-input" placeholder="Search Order ID" />
        <button className="search-button">
          <svg className="search-icon">
            <use xlinkHref="sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>

      <div className="profile">
      <div>
        <span>Super Admin</span>
        <p>princewillbeluonwuogbo1@gmail.com</p>
      </div>
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

const orderStats = [
  { total: 360, status: "successful", color: "#86efac" },
  { total: 44, status: "pending" , color: "#fde047" },
  { total: 24, status: "cancelled", color: "#fda4af" },
];

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

function OrderStatsList() {
  return (
    <section className="order-section-comp">
      <div className="order-card-scroll">
        <ul className="order-status-list">
          { orderStats.map((stats) =>
            <li key={stats.status} className="order-cards" style={{ backgroundColor: stats.color }}>
              <h3>{stats.total}</h3>
              <div>
                <span>{stats.status}</span>
                <p>orders</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
function FilterListCategory() {
  return (
    <div className="order-filter">Order Filter</div>
  );
}

export default App;

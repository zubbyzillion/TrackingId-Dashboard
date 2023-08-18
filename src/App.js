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

            <div className="order-list-section">
              <FilterListCategory />
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}

function SearchComp() {


  return (
    <section className="search-comp">


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
    </section>
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

const orderData = [
  { idNumber: "67899521JK", email: "princewillbeluonwuogbo1@gmail.com", status: "successful", color: "#86efac", date: "17-06-2023" },
  { idNumber: "67899522JK", email: "johndoe@gmail.com", status: "pending", color: "#fde047", date: "05-06-2023" },
  { idNumber: "67899523JK", email: "tonycode@gmail.com", status: "cancelled", color: "#fda4af", date: "12-06-2023" },
]

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
  <>
    <div className="order-filter">
        <div className="filter-function">
          <span>Filter by:</span>
          <select>
            <option value="">Choose Category:</option>
            {orderStats.map((stats) => <option>{stats.status.toUpperCase()}</option>)}
          </select>
        </div>

        <div className="add-btn">
          <button className="order-btn btn">Add Order</button>
        </div>
    </div>
  
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>ID Number</th>
            <th>Email</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {orderData.map((data) => <tr>
            <td>{data.idNumber}</td>
            <td>{data.email}</td>
            <td><span className="card" style={{ backgroundColor: data.color, fontWeight: 600, borderRadius: 16, padding: 8 }}>{data.status.toUpperCase()}</span></td>
            <td>{data.date}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </>
  );
}

export default App;

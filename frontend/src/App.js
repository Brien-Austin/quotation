import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    // Handle menu item click here
    console.log(`Clicked on ${menuItem}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title" style={{ fontFamily: "'Fasthand' , cursive", fontSize: "36px" }}>Tripmilestone</h1>
        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </header>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li onClick={() => handleMenuItemClick('Generate quotation')}>Generate quotation</li>
          <li onClick={() => handleMenuItemClick('Stories')}>Stories</li>
          <li onClick={() => handleMenuItemClick('Contact')}>Contact</li>
        </ul>
      </nav>
      <div className="content">
        <h2 className="form-heading" style={{ fontWeight: "400", textAlign: 'center' }}>Enjoy your travel milestone</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group card-container">
            <h3 style={{ fontWeight: "300", textAlign: 'center' }} >Where's your destination?</h3>
            <div className="card">
              <img className="card-image" src="https://dummyimage.com/1201x501" alt="Destination" />
              <div className="card-content">

                <input style={{ alignItems: 'center' }} type="button" value="Destination1" className="card-button" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="numDays">Number of days</label>
            <select id="numDays" name="numDays">
              <option value="1D">1D</option>
              <option value="2D">2D</option>
              <option value="3D">3D</option>
              <option value="4D">4D</option>
              <option value="5D">5D</option>
            </select>
          </div>
          <div className="date-group">


            <div className='row'>
              <label htmlFor="numChildren">Start Date</label>
              <input type="date" id="startDate" name="startDate" />

            </div>
            <div className='row'>
              <label htmlFor="numChildren">End Date</label>
              <input type="date" placeholder="Start Date" id="endDate" name="endDate" />
            </div>


          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <div className='row'>
              <label htmlFor="dropdown">Meal Plan</label>
              <select id="dropdown" name="dropdown">
                <option value="option1">MAP</option>
                <option value="option2">EP</option>
                <option value="option3">AP</option>
                <option value="option3">CP</option>
              </select>
            </div>
            <div className='row'>
              <label htmlFor="integerInput">Number of Children</label>
              <input type="number" id="integerInput" name="integerInput" />
            </div>
          </div>


          <button type="submit" className="generate-quote-button">Generate Quote</button>
        </form>
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import CustomNavbar from "./components/navbar"
import HomeView from "./components/homeView"
import BooksList from './components/booksList';

function App() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const handleLinkClick = (component) => {
    setActiveComponent(component);
  };

  const renderView = () => {
    if (activeComponent === 'Home') {
      return <HomeView />;
    } else if (activeComponent === 'Books') {
      return <BooksList />;
    } else {
      return <div>Hello World</div>;
    }
  };

  return (
    <div>
      <CustomNavbar activeComponent={activeComponent} handleLinkClick={handleLinkClick} />
      {renderView()}
    </div>
  );
}

export default App;

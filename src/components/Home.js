import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home container">
      <h2>Добро пожаловать в пиццерию</h2>
      <NavLink to="/base">
        <button>Создай свою пиццу</button>
      </NavLink>
    </div>
  );
};

export default Home;

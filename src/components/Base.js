import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Станадарт", "Тонкий & Хрустящий", "Тонкий и хрустящий"];
  return (
    <div className="base container">
      <h3>Шаг 1: Выберите основу</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Дальше</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;

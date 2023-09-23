import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Base, Toppings, Order, Home } from "./components/index";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newTopping;
    if (!pizza.toppings.includes(topping)) {
      newTopping = [...pizza.toppings, topping];
    } else {
      newTopping = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, topping: newTopping });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/base"
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

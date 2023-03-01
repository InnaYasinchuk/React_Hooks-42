import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState({
    coffee: 0,
    sugar: 0,
  });

  const [showBtnCoffee, setShowBtnCoffee] = useState(true);
  const [showBtnSugar, setShowBtnSugar] = useState(true);

  const addСoffee = () =>
    setProducts((prevstate) => {
      return {
        ...prevstate,
        coffee: prevstate.coffee + 1,
      };
    });

  const addSugar = () =>
    setProducts((prevstate) => {
      return {
        ...prevstate,
        sugar: prevstate.sugar + 1,
      };
    });

  const removeСoffee = () =>
    setProducts((prevstate) => {
      return {
        ...prevstate,
        coffee: prevstate.coffee - 1,
      };
    });

  const removeSugar = () =>
    setProducts((prevstate) => {
      return {
        ...prevstate,
        sugar: prevstate.sugar - 1,
      };
    });

  const save = () => {
    localStorage.setItem("coffee", products.coffee);
    localStorage.setItem("sugar", products.sugar);
  };

  const clear = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("sugar");
    setProducts({ coffee: 0, sugar: 0 });
  };

  useEffect(() => {
    if (localStorage.getItem("coffee")) {
      setProducts((prevstate) => ({
        ...prevstate,
        coffee: +localStorage.getItem("coffee"),
        sugar: +localStorage.getItem("sugar"),
      }));
    }
  }, []);

  useEffect(() => {
    setShowBtnCoffee(products.coffee > 0);
    setShowBtnSugar(products.sugar > 0);
  }, [products]);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`coffee: ${products.coffee}`}</span>
          <button onClick={addСoffee}>Add</button>
          {showBtnCoffee && (
            <button onClick={removeСoffee} disabled={products.coffee === 0}>
              Remove
            </button>
          )}
        </div>
        <div className="product">
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {showBtnSugar && (
            <button onClick={removeSugar} disabled={products.sugar === 0}>
              Remove
            </button>
          )}
        </div>
        <div className="save">
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;

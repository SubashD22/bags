import { useEffect, useState } from "react";
import { useBagContext } from "./context/bagContext";

function App() {
  const { bags, deleteBag, restart } = useBagContext();
  const [bag, setBag] = useState(bags[0]);
  const del = (id) => {
    deleteBag(id);
  };
  useEffect(() => {
    setBag(bags[0]);
  }, [bags]);
  if (!bags.length) {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div>
          <h1 style={{ color: "black" }}>No items found</h1>
          <button
            style={{
              fontSize: "inherit",
              padding: "0.5rem 0.8rem",
              color: "black",
            }}
            onClick={restart}
          >
            Restart
          </button>
        </div>
      </main>
    );
  }
  return (
    <main style={{ backgroundColor: [bag?.color] }}>
      <header>
        <h1>Lipault</h1>
      </header>
      <section>
        <div className="discriptionContainer">
          <div className="discription">
            <h5 className="name">{bag?.name}</h5>
            <h3 className="category">{bag?.category}</h3>
            <p className="price">Price: {bag?.price}</p>
            <div className="items">
              {bags.map((b, i) => {
                return (
                  <div key={i} onClick={() => setBag(bags[i])}>
                    <img src={b?.image} alt={b?.name} />
                  </div>
                );
              })}
            </div>
            <button onClick={() => del(bag.id)}>Delete</button>
            {/* <button onClick={() => localStorage.clear()}>clear local</button> */}
          </div>
        </div>
        <div className="imageContainer">
          <div>
            <img className="bagImage" src={bag.image} alt={bag.name} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

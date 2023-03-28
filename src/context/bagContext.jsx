import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();
export const BagConext = ({ children }) => {
  const localdata = JSON.parse(localStorage.getItem("bags"));
  const initialState = [
    {
      id: 1,
      name: "Black",
      color: "#979797",
      image: "/black.png",
      category: "Plume Avenue",
      price: "100.00 $",
    },
    {
      id: 2,
      name: "Caramel",
      image: "/caramel.png",
      color: "#66BB6A",
      category: "Plume Elegance",
      price: "100.00 $",
    },
    {
      id: 3,
      name: "Rosewood",
      image: "/bordeaux.png",
      color: "#F8BBD0",
      category: "Miss Plume",
      price: "100.00 $",
    },
    {
      id: 4,
      name: "Night Blue",
      image: "/nightblue.png",
      color: "#42A5F5",
      category: "Variation",
      price: "100.00 $",
    },
    {
      id: 5,
      name: "Red",
      image: "/red.png",
      color: "#F06B69",
      category: "By The Seine",
      price: "100.00 $",
    },
  ];
  const [bags, setBags] = useState(localdata || initialState);
  const deleteBag = (id) => {
    const newBags = bags.filter((b) => b.id !== id);
    setBags(newBags);
  };
  const restart = () => {
    localStorage.clear();
    setBags(initialState);
    window.location.reload();
  };
  useEffect(() => {
    localStorage.setItem("bags", JSON.stringify(bags));
  }, [bags]);
  return (
    <Context.Provider value={{ bags, deleteBag, restart }}>
      {children}
    </Context.Provider>
  );
};
export const useBagContext = () => useContext(Context);

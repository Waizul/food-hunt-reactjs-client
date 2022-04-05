import { useEffect, useState } from "react";

const useMenu = (type) => {
  const [items, setItems] = useState([]);
  console.log(type,items)
  useEffect(() => {
    const url = `https://foodhuntbd.herokuapp.com/items?type=${type}`;
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [type]);

  return items;
};

export default useMenu;

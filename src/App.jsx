import { useState } from "react";
import MenuItem from "./MenuItem";
import menu from "./data";
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const categories = ["all", ...new Set(menu.map((item) => item.category))];

  const filterItems = (category) => {
    let updatedMenuItems = menu.filter((item) => {
      return item.category === category;
    });
    if (category === "all") {
      updatedMenuItems = menu;
    }
    setMenuItems(updatedMenuItems);
  };

  return (
    <main>
      <h1>Our Menu</h1>
      <section>
        {categories.map((category) => (
          <button key={category} onClick={() => filterItems(category)}>
            {category}
          </button>
        ))}
      </section>
      <section style={{ display: "flex" }}>
        {menuItems.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};
export default App;

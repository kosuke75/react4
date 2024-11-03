import React, { useState, useEffect } from "react";

const productsData = [
  {
    name: "Baked Beans",
    price: 0.40,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "Carrot & Coriander Soup",
    price: 1.20,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
  {
    name: "Chicken Noodle Soup",
    price: 1.50,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "Corned Beef",
    price: 2.00,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "Garden Peas",
    price: 0.50,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "Hot Dogs",
    price: 1.80,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "Kidney Beans",
    price: 0.60,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "Mushy Peas",
    price: 0.45,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "Refried Beans",
    price: 0.70,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "Spam",
    price: 2.50,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "Tomato",
    price: 0.55,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "Tomato Soup",
    price: 1.00,
    image: "tomatosoup.jpg",
    type: "soup",
  },
];

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    let filteredProducts = productsData;

    if (category !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.type === category.toLowerCase()
      );
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProducts(filteredProducts);
  };

  return (
    <>
      <header>
        <h1>The Can Store</h1>
      </header>
      <div>
        <aside>
          <form onSubmit={handleFilter}>
            <div>
              <label htmlFor="category">Choose a category:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>All</option>
                <option>Vegetables</option>
                <option>Meat</option>
                <option>Soup</option>
              </select>
            </div>
            <div>
              <label htmlFor="searchTerm">Enter search term:</label>
              <input
                type="text"
                id="searchTerm"
                placeholder="e.g. beans"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Filter results</button>
            </div>
          </form>
        </aside>
        <main>
          {products.map((product, index) => (
            <section key={index} className={product.type}>
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <img src={`./images/${product.image}`} alt={product.name} />
            </section>
          ))}
        </main>
      </div>
      <footer>
        <p>All icons found at the Noun Project:</p>
        <ul>
          <li>
            Bean can icon by{" "}
            <a href="https://thenounproject.com/yalanis/">Yazmin Alanis</a>
          </li>
          <li>
            Vegetable icon by{" "}
            <a href="https://thenounproject.com/skatakila/">Ricardo Moreira</a>
          </li>
          <li>
            Soup icon by{" "}
            <a href="https://thenounproject.com/ArtZ91/">Arthur Shlain</a>
          </li>
          <li>
            Meat Chunk icon by{" "}
            <a href="https://thenounproject.com/smashicons/">Oliviu Stoian</a>.
          </li>
        </ul>
      </footer>
    </>
  );
}

import MySignature from "./components/MySignature.jsx";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <MySignature />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Elnakhlawy Pizza </h1>
    </header>
  );
}
function Menu() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 24;
const styles={marginBottom:'10px',marginTop:'-14px'}
  return (
    <main className="menu">
      <h2>The menu</h2>
      {pizzaData.length > 0 ? (
        <>
          {" "}
          <p style={styles}>
            Welcome to our pizza haven! Whether you're craving the classics or
            looking for bold, mouthwatering flavors, our diverse pizza menu has
            something for everyone. Each pizza is handcrafted with a crispy
            golden crust, rich tomato sauce, premium mozzarella, and fresh,
            high-quality ingredients.
          </p>
          <ul className="ListOfPizaa">
            {pizzaData.map((pizaa) => (
              <Pizza pizaObj={pizaa} />
            ))}
          </ul>
        </>
      ) : (
        <p className="pError">Sorry. We'er still working on our menu :)</p>
      )}
      {hour > openHour && hour < closeHour && <Button />}
    </main>
  );
}

function Pizza({ pizaObj }) {
  return (
    <li className={`pizaa ${pizaObj.soldOut?'soldOut':""} `}>
      <img src={pizaObj.photoName} alt="Focaccia" />
      <div>
        <h3>{pizaObj.name}</h3>
        <p className="praIngredients">{pizaObj.ingredients}</p>
        <span>{pizaObj.soldOut?"sold out":pizaObj.price + "$"}</span>
      </div>
    </li>
  );
}
function Button() {
  return (
    <div>
      <button className="btnOrder"> Order</button>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 24;
  return (
    <footer>
      <h1>
        {new Date().toLocaleTimeString()} <br />
        {hour >= openHour && hour < closeHour
          ? " Pizza  Elnakhlwy is open now!"
          : "Sorry we are not open"}
      </h1>
    </footer>
  );
}

export default App;

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
      <Menu/>
      <Footer/>
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
  return (
    <main className="menu">
      <h2>The menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
function Footer() {
  const hour=new Date().getHours();
  const openHour=6;
  const closeHour=24;
  return (
    <footer>
      <h1>
      
         { new Date().toLocaleTimeString()} <br />
          {hour>=openHour&& hour<closeHour?' Pizza  Elnakhlwy is open now!':'Sorry we are not open'}
      </h1>  
    </footer>
  );
}

function Pizza() {
  return (
    <>
      <img src="pizzas/focaccia.jpg" alt="Focaccia" />
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
    </>
  );
}
export default App;

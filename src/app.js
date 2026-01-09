import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Order />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div>
      <h1
        style={{
          fontSize: "45px",
          textAlign: "center",
          color: "#f08c00",
          marginBlock: 30,
        }}
      >
        _ Pizza Menu. _
      </h1>
      <h5
        style={{
          textAlign: "center",
          textDecoration: "overline solid black",
          fontSize: 22,
          fontStyle: "normal",
        }}
      >
        Our Menu List
      </h5>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginBlock: 25,
        }}
      >
        Authentic Indian cuisine. 6 creative dishes to choose from. <br />
        All from our stone oven, all organic, all delicious.
      </p>
    </div>
  );
}

function Order() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "25px",
      }}
    >
      {pizzaData?.map((values, index) => (
        <Pizza key={index} values={values} />
      ))}
    </div>
  );
}

function Pizza({ values }) {
  const pictureStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };

  return (
    <div
      style={{
        width: "calc(50% - 12.5px)", // half width minus half the gap
        display: "flex",
        alignItems: "center",
        gap: "15px",
        marginBottom: "25px",
      }}
    >
      <div style={{ flex: "1" }}>
        <img src={values?.photoName} alt="pizza-name" style={pictureStyle} />
      </div>
      <div style={{ flex: "2" }}>
        <p>{values?.name}</p>
        <p>{values?.ingredients}</p>
        <p>${values?.price}</p>
      </div>
    </div>
  );
}

function Footer() {
  const Dates = new Date();
  const hours = Dates.getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;
  return (
    <>
      <p style={{ textAlign: "center", fontSize: "20px", marginBlock: 10 }}>
        {isOpen ? "we are open Welcome " : "We are closed, Shop opens at 11pm"}
      </p>
    </>
  );
}

export default App;

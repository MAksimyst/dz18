import Restaurant from "./Restaurant";
import EditableRestaurant from "./EditableRestaurant";
import LoginForm from "./LoginForm";
import "./App.css";

const restaurantData = {
  name: "Ресторан «Київська Русь»",
  address: "м. Вінниця, вул. Соборна, 10",
  rating: 4.5,
  cuisine: "Українська",
  image: "https://placehold.co/250x160?text=Restaurant",
};

function App() {
  return (
    <div className="app">
      <h1>Модуль 5. Частина 2</h1>

      <h3>Завдання 1</h3>
      <div className="card">
        <Restaurant {...restaurantData} />
      </div>

      <h3>Завдання 2</h3>
      <EditableRestaurant initialData={restaurantData} />

      <h3>Завдання 3</h3>
      <LoginForm />
    </div>
  );
}

export default App;

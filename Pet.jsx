function Pet({ name, type, breed, age, color, photo }) {
  return (
    <div className="card">
      <img src={photo} alt={name} width="200" />
      <h2>{name}</h2>
      <p>Тварина: {type}</p>
      <p>Порода: {breed}</p>
      <p>Вік: {age} р.</p>
      <p>Колір: {color}</p>
    </div>
  );
}

export default Pet;

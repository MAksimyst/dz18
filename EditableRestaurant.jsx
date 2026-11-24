import { useState } from "react";
import PropTypes from "prop-types";
import Restaurant from "./Restaurant";

function EditableRestaurant({ initialData }) {
  const [data, setData] = useState(initialData);
  const [form, setForm] = useState(initialData);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setData({ ...form, rating: Number(form.rating) });
    setEditing(false);
  };

  const handleCancel = () => {
    setForm(data);
    setEditing(false);
  };

  if (!editing) {
    return (
      <div className="card">
        <Restaurant {...data} />
        <button onClick={() => setEditing(true)}>Редагувати</button>
      </div>
    );
  }

  return (
    <div className="card">
      <p>
        Назва: <input name="name" value={form.name} onChange={handleChange} />
      </p>
      <p>
        Адреса:{" "}
        <input name="address" value={form.address} onChange={handleChange} />
      </p>
      <p>
        Рейтинг:{" "}
        <input
          name="rating"
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
        />
      </p>
      <p>
        Тип кухні:{" "}
        <input name="cuisine" value={form.cuisine} onChange={handleChange} />
      </p>
      <p>
        Зображення (URL):{" "}
        <input name="image" value={form.image} onChange={handleChange} />
      </p>
      <button onClick={handleSave}>Зберегти</button>{" "}
      <button onClick={handleCancel}>Скасувати</button>
    </div>
  );
}

EditableRestaurant.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cuisine: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditableRestaurant;

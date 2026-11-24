function Film({ title, director, year, studio, poster }) {
  return (
    <div className="card">
      <img src={poster} alt={title} width="200" />
      <h2>{title}</h2>
      <p>Режисер: {director}</p>
      <p>Рік випуску: {year}</p>
      <p>Кіностудія: {studio}</p>
    </div>
  );
}

export default Film;

import { useState, useEffect } from "react";

function TimeView({ time }) {
  return <h1>{time.toLocaleTimeString("uk-UA")}</h1>;
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="card">
      <h2>Поточний час</h2>
      <TimeView time={time} />
    </div>
  );
}

export default Clock;

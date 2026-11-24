function Profile({ name, phone, email, city, experience, skills, photo }) {
  return (
    <div className="card">
      <img src={photo} alt={name} width="150" />
      <h2>{name}</h2>
      <p>Телефон: {phone}</p>
      <p>Email: {email}</p>
      <p>Місто: {city}</p>
      <p>Досвід роботи: {experience}</p>
      <p>Навички:</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;

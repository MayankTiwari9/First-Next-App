const Developer = ({ params }) => {
  const id = parseInt(params.developer, 10);

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const person = details.find((dev) => dev.id === id);

  return <div>
    {person ? (
      <div>
        <h1>{person.name}</h1>
        <p>{person.role}</p>
      </div>
    ) : (
      <h1>Developer doesn't exist</h1>
    )}
  </div>;
};

export default Developer;

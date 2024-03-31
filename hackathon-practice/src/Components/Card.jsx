import "./Card.css"; // Import CSS file for styling

const Card = ({ name, subject }) => {
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Subject Taught:</strong> {subject}
        </p>
      </div>
    </div>
  );
};

export default Card;

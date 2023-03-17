import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ id, imageUrl, prefix, name, lastName, title }) {
  return (
    <Card className="m-2" style={{ width: "18em" }}>
      <Link to={`/user/${id}`}>
        <Card.Img variant="top" src={`${imageUrl}?v=${id}`} />
      </Link>
      <Card.Body>
        <Card.Title className="text-primary">
          {prefix} {name} {lastName}
        </Card.Title>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;

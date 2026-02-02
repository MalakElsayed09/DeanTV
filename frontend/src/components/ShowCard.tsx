import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Show } from "../api/shows";

interface Props {
  show: Show;
}

export default function ShowCard({ show }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      className="bg-dark text-white border-0"
      style={{ width: "180px", cursor: "pointer" }}
      onClick={() => navigate(`/watch/${show._id}`)}
    >
      <Card.Img
        src={show.thumbnailUrl}
        alt={show.title}
        style={{ height: "260px", objectFit: "cover" }}
      />
      <Card.Body className="p-2">
        <Card.Title className="fs-6 text-truncate">{show.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

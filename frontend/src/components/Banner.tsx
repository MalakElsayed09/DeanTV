import { Container, Button } from "react-bootstrap";
import { Show } from "../types/show";

interface Props {
  show: Show;
}

export default function Banner({ show }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${show.banner || show.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <h1 className="fw-bold">{show.title}</h1>
        <p style={{ maxWidth: "500px" }}>{show.description}</p>

        <Button variant="light" className="me-2">
          ▶ Play
        </Button>
        <Button variant="secondary">More Info</Button>
      </Container>
    </div>
  );
}

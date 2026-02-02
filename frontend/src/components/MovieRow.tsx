import { Card } from "react-bootstrap";

interface Props {
  title: string;
}

export default function MovieRow({ title }: Props) {
  return (
    <div className="mb-4">
      <h4 className="text-white ms-3">{title}</h4>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "10px",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Card
            key={i}
            style={{
              minWidth: "150px",
              marginRight: "10px",
              backgroundColor: "#222",
              color: "white",
            }}
          >
            <Card.Img
              variant="top"
              src={`https://picsum.photos/200/300?random=${i}`}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

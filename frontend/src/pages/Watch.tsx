import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { Show } from "../types/show";

export default function Watch() {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    if (!id) return;
    api.get(`/shows/${id}`).then((res) => setShow(res.data));
  }, [id]);

  if (!show) return <div className="text-white">Loading...</div>;

  return (
    <div className="text-white p-4">
      <h1>{show.title}</h1>
      <p>{show.description}</p>

      {/* Later: video player */}
    </div>
  );
}

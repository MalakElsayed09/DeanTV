import { useEffect, useState } from "react";
import { getShows } from "../api/shows";
import { useAuth } from "../hooks/useAuth";

interface Show {
  _id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}

export default function Home() {
  const [shows, setShows] = useState<Show[]>([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    getShows().then((res) => setShows(res.data));
  }, []);

  return (
    <div>
      <header>
        <h1>DeanTV</h1>
        {user && (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </header>

      <div>
        {shows.map((show) => (
          <div key={show._id}>
            <img src={show.thumbnailUrl} width={200} />
            <h3>{show.title}</h3>
            <p>{show.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getShows } from "../api/shows";
import ShowCard from "../components/ShowCard";
import { Show } from "../types/show";

const Home = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    const fetchShows = async () => {
      const data = await getShows();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-white mb-4">All Shows</h2>
      <div className="row">
        {shows.map((show) => (
          <ShowCard key={show._id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default Home;

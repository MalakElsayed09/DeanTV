import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getShows } from "../api/shows";
import { Show } from "../types/show";
import ShowCard from "../components/ShowCard";
import Banner from "../components/Banner";

export default function Home() {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShows()
      .then(setShows)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center text-white mt-5">Loading...</div>;
  }

  if (!shows.length) {
    return <div className="text-center text-white mt-5">No shows found</div>;
  }

  return (
    <>
      <Banner show={shows[0]} />

      <Container fluid className="px-4 mt-4">
        <h4 className="text-white mb-3">Popular on DeanTV</h4>

        <div className="d-flex gap-3 overflow-auto pb-3">
          {shows.map((show) => (
            <ShowCard key={show._id} show={show} />
          ))}
        </div>
      </Container>
    </>
  );
}

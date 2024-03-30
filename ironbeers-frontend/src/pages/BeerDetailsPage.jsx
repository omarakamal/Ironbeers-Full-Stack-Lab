import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [oneBeer, setOneBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/beers/${beerId}`)
      .then((result) => {
        setOneBeer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beerId]);

  return (
    <div>
      <img src={oneBeer.image_url} alt="" />
      <h1>{oneBeer.name}</h1>
      <h2>{oneBeer.attenuation_level}</h2>
      <h2>{oneBeer.tagline}</h2>
      <p>{oneBeer.contributed_by}</p>
      {oneBeer.is_alcoholic && <p>This beer is alcoholic</p>}
    </div>
  );
}

export default BeerDetailsPage;

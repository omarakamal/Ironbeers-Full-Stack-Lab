/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [isAlcoholic, setIsAlcoholic] = useState(false);
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      isAlcoholic: isAlcoholic,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy,
    };
    axios
      .post("http://localhost:5005/api/beers", newBeer)
      .then((result) => {
        console.log(result);
        navigate("/beers");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Insert the beer's name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Tagline
          <input
            type="text"
            placeholder="Tagline"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>

        <label>
          Attenuation Level
          <input
            type="number"
            placeholder="Attenuation level"
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>

        <label>
          Contributed By
          <input
            type="text"
            placeholder="Contributed by"
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </label>

        <label>
          Is Alcoholic
          <select
            onChange={(e) => {
              setIsAlcoholic(e.target.value);
            }}
          >
            <option value=""></option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAuthor = () => {
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);
  const [succesfull, setSuccesfull] = useState(false);
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/" + id)
      .then((response) => setAuthor(response.data.author))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false)
    setSuccesfull(false)

    axios
      .put("http://localhost:8000/api/author/" + id, { author: author })
      .then((response) => {
        if (response.data.message) {
          setError(response.data.message);
        } else if (response.data.updated) {
          setError(false);
          setSuccesfull(true);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        setSuccesfull(false);
        setError(err.response.data.message);
      });
  };

  const cancelButton = () => {
    navigate("/");
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h3>Edit Author:</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={author}
          name={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {error && (
          <p style={{ color: "red" }}>
            The field should be at least three characters long
          </p>
        )}
        <button onClick={cancelButton}>Cancel</button>
        <button type="submit">Submit</button>
        {succesfull && (
          <p style={{ color: "green" }}>The form was sent succesfully</p>
        )}
      </form>
    </div>
  );
};

export default EditAuthor;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateAuthor = () => {
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [succesfull, setSuccesfull] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false)
    setSuccesfull(false)

    axios
      .post("http://localhost:8000/api/author", { author: author })
      .then((response) => {
        setError(false);
        setSuccesfull(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
      <h3>Add a new Author:</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={cancelButton}>Cancel</button>
        <button type="submit">Submit</button>
        {succesfull && (
          <p style={{ color: "green" }}>The form was sent succesfully</p>
        )}
      </form>
    </div>
  );
};

export default CreateAuthor;

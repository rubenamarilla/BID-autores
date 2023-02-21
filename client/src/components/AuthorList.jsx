import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((response) => setAuthors(response.data))
      .catch((err) => console.log(err));
  }, [authors]);

  const editAuthor = (id) => {
    navigate("/edit/" + id);
  };

  const deleteAuthor = (authorId) => {
    axios.delete('http://localhost:8000/api/author/' + authorId)
    .then(res => setAuthors(authors.filter(author => author._id !== authorId)))
    .catch(err => console.log(err))
    
  };

  return (
    <div>
      <Link to={"/create"}>Add an Author</Link>
      <h3>We have quotes by:</h3>
      <table>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((data, index) => (
            <tr key={index}>
              <td>{data.author}</td>
              <td>
                <button onClick={(e) => editAuthor(data._id)}>Edit</button>
                <button onClick={(e)=> deleteAuthor(data._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;

import React from "react";
import useFetch from "../hooks/useFetch";

const PostTable = () => {
  const [items, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=10"
  );

  if (loading) return <h1>Chargement ...</h1>;

  return (
    <>
      <h1>PostTable</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Contenu</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.mail}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PostTable;

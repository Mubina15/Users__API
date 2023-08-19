import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import "./Comments.css"

export const Comments = () => {

  const [userCom, setUserCom] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then((res) => res.json())
      .then((data) => setUserCom(data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="dff">
      {
        userCom.map(item => (

          <div className="cardd">
            <div className="card-body">
              <Link to={`/users/${item.id}`}>
                <h5 className="h55">{item.body}</h5>
              </Link>
              <Link className="btn btn-primary" to={`users/${item.id}`}>
                Back
              </Link>
            </div>
          </div>

        ))
      }
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import "./UserSingle.css"

export const UserSingle = () => {

  const { userId } = useParams();

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="dff">
      {
        userInfo.map(item => (

          <div key={item.id} className="cardd">
            <img className="img" src="https://picsum.photos/id/28/150" alt="Card image cap" />
            <div className="card-body">

              <Link to={`/users/${item.id}`}>
                <h5 className="h55">{item.name}</h5>
              </Link>
              <Link className="btn btn-primary" to="/users">
                Back
              </Link>
            </div>
          </div>

        ))
      }
    </div>
  );
};

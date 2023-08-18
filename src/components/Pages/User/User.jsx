import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./User.css"

export const User = () => {


  const [user, setUser] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>

      {
        user.length > 0 && <ul>
          {
            user.map(item => (
              <li key={item.id}>
                <Link to={`/users/${item.id}`} >
                  <div className="card">
                    <img className="img" src="https://picsum.photos/id/10/150" alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      }

    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'


export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext)
  // const [username, setUsername] = useState(null);
  useEffect(()=> {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        // setUsername(userInfo.username);
      });
    })
  }, [])

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    // setUsername(null);
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {username && (
            <>
              <Link to={'/create'} >Create new post</Link>
              <a onClick={logout}>Logout</a> 
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          
        </nav>
      </header>
  )
}
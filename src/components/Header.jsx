import React from 'react';

export default function Header({ user }) {
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Recipes book</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              {!user ? (
                 <>
                <a className="nav-link active" aria-current="page" href="#">Favourites</a>
                <a className="nav-link" href="/reg">Registration</a>
                <a className="nav-link" href="/auth">Sign in</a>
                </>
            ) : (
            <>
              <a className="nav-link active" aria-current="page" href="fav">Favourite</a>
              <a className="nav-link" href="/reg/logout">Sign out</a>
            </>
            )}
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

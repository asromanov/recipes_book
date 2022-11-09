import React from 'react';

export default function Header({ user }) {
  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Книга рецептов</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              {!user ? (
                 <>
                <a className="nav-link active" aria-current="page" href="#">Избранное</a>
                <a className="nav-link" href="/reg">Регистрация</a>
                <a className="nav-link" href="/reg/auth">Авторизация</a>
                </>
            ) : (
            <>
              <a className="nav-link active" aria-current="page" href="#">Избранное</a>
              <a className="nav-link" href="/reg/logout">Выход</a>
            </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

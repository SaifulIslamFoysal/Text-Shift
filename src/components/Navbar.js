import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.basha}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefaultDark"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefaultDark">
              DarkMode
            </label>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode2}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefaultSky"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefaultSky">
              SkyMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

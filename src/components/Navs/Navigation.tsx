import React from "react";
import "../../style/css/main.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  // ui stuff
  let mobileStatus = false;

  const handleMobile = () => {
    mobileStatus = !mobileStatus;

    let mobileNav = document.querySelector(".mobileNav") as HTMLDivElement;
    let effect = document.querySelector(".effect") as HTMLDivElement;

    if (mobileStatus) {
      mobileNav.style.display = "block";
      effect.style.opacity = "0.5";
      effect.style.zIndex = "999";
    } else {
      mobileNav.style.display = "none";
      effect.style.opacity = "0";
      effect.style.zIndex = "-2";
    }
  };

  const handleRemoveMobile = () => {
    mobileStatus = false;

    let mobileNav = document.querySelector(".mobileNav") as HTMLDivElement;
    let effect = document.querySelector(".effect") as HTMLDivElement;

    mobileNav.style.display = "none";
    effect.style.opacity = "0";
    effect.style.zIndex = "-2";
  };

  return (
    <>
      <div className="effect" onClick={handleRemoveMobile}></div>
      <div className="navbar">
        <h1 className="logoNav">
          <HashLink to="/#">
            TypingHu<span></span>
          </HashLink>
        </h1>
        <ul>
          <li>
            <HashLink smooth to="#what">
              What?
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/play">
              Speed Test
            </HashLink>
          </li>
        </ul>

        <Link to="/sign-in">
          <button className="navButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6f32be"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>
            <p>Sign In</p>
          </button>
        </Link>

        <div className="hamburger" onClick={handleMobile}>
          <div className="line line1"> </div>
          <div className="line line2"> </div>
          <div className="line line3"> </div>
        </div>
      </div>

      <div className="mobileNav">
        <h1 className="logoNavMobile">
          <HashLink to="/">
            TypingHu<span></span>
          </HashLink>
        </h1>
        <ul>
          <HashLink smooth to="#what">
            <li>What?</li>
          </HashLink>
          <HashLink smooth to="#about">
            <li>About</li>
          </HashLink>
          <HashLink smooth to="#contact">
            <li>Contact</li>
          </HashLink>
          <li>
            <HashLink smooth to="/play">
              Speed Test
            </HashLink>
          </li>
        </ul>

        <Link to="/sign-in">
          <button className="navButtonMobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#6f32be"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M20 12h-13l3 -3m0 6l-3 -3" />
            </svg>
            <p>Sign In</p>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Navigation;

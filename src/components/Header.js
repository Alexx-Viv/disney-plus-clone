import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src='./images/logo.svg' />
      <NavMenu>
        <a href='www.wikipedia.com'>
          <img src='./images/home-icon.svg' alt='home' />
          <span>HOME</span>
        </a>
        <a href='www.wikipedia.com'>
          <img src='./images/search-icon.svg' alt='search' />
          <span>SEARCH</span>
        </a>
        <a href='www.wikipedia.com'>
          <img src='./images/watchlist-icon.svg' alt='watchlist' />
          <span>WATCHLIST</span>
        </a>
        <a href='www.wikipedia.com'>
          <img src='./images/original-icon.svg' alt='originals' />
          <span>ORIGINALS</span>
        </a>
        <a href='www.wikipedia.com'>
          <img src='./images/movie-icon.svg' alt='movies' />
          <span>MOVIES</span>
        </a>
        <a href='www.wikipedia.com'>
          <img src='./images/series-icon.svg' alt='series' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='https://lh3.googleusercontent.com/a-/AOh14GhPEWpoUbB_IZyXZnBokOFaXzn0RKzgXo7jfxx8GQ=s96-c' />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background-color: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

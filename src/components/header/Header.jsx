import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";
import {
  CartIcon,
  DownIcon,
  EmailIcon,
  HeartIcon,
  LoginIcon,
  PhoneIcon,
} from "../../icons";
import { logout } from "../../redux/apiCalls";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useEffect } from "react";
const HeaderStyles = styled.div`
  width: 100%;
  background: ${(props) => props.theme.purpleHeader};
  padding: 12px;
  top: 0;
  ${mobile({
    width: "100vw",
  })}
  .container {
    display: flex;
    justify-content: space-between;
    ${mobile({
      flexDirection: "column",
    })}

    .list {
      display: flex;
      align-items: center;
      gap: 20px;
      ${mobile({
        display: "none",
      })}
      &-content {
        color: #f1f1f1;
        display: flex;
        align-items: center;
        ${mobile({
          fontSize: "12px",
        })}
      }
    }
    .list-left {
      ${mobile({
        display: "flex",
      })}
    }
  }
`;
const ListItem = styled.span`
  font-size: 16px;
  line-height: 18.75px;
  color: white;
  display: flex;
  gap: 4px;
  font-weight: 600;
  .link-navigate {
    display: flex;
    gap: 4px;
  }
  .cart {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
  }
  button {
    font-family: "Josefin Sans", sans-serif;
    background: none;
    font-size: 16px;
    line-height: 18.75px;
    color: white;

    font-weight: 600;
  }
  .dropdown-container {
    position: relative;
    &-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .display-name {
      cursor: pointer;
    }
    .dropdown-icon {
      cursor: pointer;
    }
    .dropdown-list {
      display: flex;
      z-index: 1000;
      flex-direction: column;
      position: absolute;

      list-style: none;
      background: ${(props) => props.theme.purpleHeader};
      top: calc(100% + 14px);
      right: 0;
      /* padding: 4px 20px; */
      .dropdown-item {
        cursor: pointer;
        /* width: 100%; */
        min-width: 140px;
        text-align: center;
        padding: 8px 0;
        border-bottom: 1px solid white;
        :hover {
          background: #a15cfa;
        }
      }
    }
  }
`;

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cartNumber = useSelector((state) => state.cart.products);
  const {
    show: showDrop,
    setShow: setShowDrop,
    nodeRef: showRef,
  } = useClickOutside();
  const dispatch = useDispatch();

  const getLastName = (arr) => {
    return arr[arr.length - 1];
  };

  return (
    <HeaderStyles>
      <div className="container">
        <div className="list list-left">
          <ListItem>
            <EmailIcon></EmailIcon>
            <span className="list-content">mushroomlazy259@gmail.com</span>
          </ListItem>
          <ListItem>
            <PhoneIcon></PhoneIcon>
            <span className="list-content">(12345)67890</span>
          </ListItem>
        </div>
        <div className="list">
          {/* <ListItem>
            <span className="list-content">English</span>
            <DownIcon></DownIcon>
          </ListItem>
          <ListItem>
            <span className="list-content">USD</span> <DownIcon></DownIcon>
          </ListItem> */}

          <ListItem>
            <Link to="/wishlist" className="cart">
              <span className="list-content">Wishlist</span>
              <HeartIcon></HeartIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Link className="cart" to="/cart">
              <span>Cart</span>
              <CartIcon number={cartNumber?.length}></CartIcon>
            </Link>
          </ListItem>
          <ListItem>
            {user ? ( //if !user we show login
              <>
                {/* <button
                  className="link-navigate"
                  onClick={() => logout(dispatch)}
                >
                  <span className="list-content">Logout</span>
                  <LoginIcon></LoginIcon>
                </button> */}
                <div className="dropdown-container" ref={showRef}>
                  <div
                    className="dropdown-container-item"
                    onClick={() => setShowDrop((prev) => !prev)}
                  >
                    <span className="display-name">
                      {(user.displayName &&
                        getLastName(user.displayName?.split(" "))) ||
                        "Dan"}
                    </span>
                    <DownIcon className="dropdown-icon" />
                  </div>
                  {showDrop && (
                    <ul className="dropdown-list">
                      <li className="dropdown-item">My Shop</li>
                      <li className="dropdown-item">Settings</li>
                      <li
                        onClick={() => logout(dispatch)}
                        className="dropdown-item"
                      >
                        Log out
                      </li>
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <Link className="link-navigate" to="/login">
                <span className="list-content">Login</span>
                <LoginIcon></LoginIcon>
              </Link>
            )}
          </ListItem>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;

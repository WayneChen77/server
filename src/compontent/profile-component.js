import React, { useContext } from "react";
import { CurrentContext } from "../top-compontent";
import Getapi from "./apiaxios";
import { Route, Routes, NavLink } from "react-router-dom";
import Userprofile from "./profilepage/userprofile-compontents";
import Usersellspage from "./profilepage/usersellspage-compontents";
import Myproduct from "./profilepage/myproduct";
import Myclient from "./profilepage/myclient";
const Profile = () => {
  const currentUserset = useContext(CurrentContext);
  const currentUser = currentUserset[0] ?? "";

  const handelClickLogOut = () => {
    Getapi.logout();
  };
  return (
    <div className="container-fill p-5 profilePage">
      <div className="row py-3">
        <div className="col-3 profileLeft" id="sticky-sidebar">
          <div className="sticky-top">
            <h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              {currentUser.nickName}
            </h1>
            <header className="jumbtron">
              <NavLink
                to="usersellspage"
                className="nav-link"
                activeclassname="active"
              >
                <h3>我的訂單</h3>
              </NavLink>
              <NavLink to="userprofile" className="nav-link">
                <h3>個人檔案</h3>
              </NavLink>
              {currentUser.current === "sells" && (
                <NavLink to="myproduct" className="nav-link">
                  <h3>我的商品</h3>
                </NavLink>
              )}
              {currentUser.current === "sells" && (
                <NavLink to="myclient" className="nav-link">
                  <h3>客戶商品</h3>
                </NavLink>
              )}
            </header>
          </div>
          <h3>
            <a className="logout" href="/" onClick={handelClickLogOut}>
              登出
            </a>
          </h3>
        </div>
        <Routes>
          <Route path="userprofile" exact element={<Userprofile />} />
          <Route path="usersellspage" exact element={<Usersellspage />} />
          <Route
            path="myproduct"
            exact
            element={<Myproduct currentUser={currentUser} />}
          />
          <Route
            path="myclient"
            exact
            element={<Myclient currentUser={currentUser} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;

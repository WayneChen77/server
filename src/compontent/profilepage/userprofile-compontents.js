import React, { useContext, useState } from "react";
import { CurrentContext } from "../../top-compontent";
import Getapi from "../apiaxios";

const Userprofile = () => {
  const currentUserset = useContext(CurrentContext);
  const currentUser = currentUserset[0];
  const [nickName, setNickName] = useState(currentUser.nickName);
  const [userAddress, setUserAddress] = useState(currentUser.email);
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const hadelClickPatchUser = () => {
    Getapi.patchCurrentUser(currentUser.ID, userAddress, nickName, oldPassword)
      .then((res) => {
        console.log("ok");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const hadelClickPatchPassword = () => {
    Getapi.patchCurrentUser(currentUser.ID, userAddress, nickName, oldPassword)
      .then((res) => {
        console.log("ok");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="col">
      <div className="row  profileRight profileRight1">
        <h2>個人檔案 </h2>
        <hr />
        <div className="col-6">
          <label htmlFor="inputName" className="col-form-label  mt-auto">
            姓名
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="passwordHelpInline"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-6">
          <label
            htmlFor="exampleInputEmail1"
            className="col-form-label mt-auto"
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userAddress}
            onChange={(e) => {
              setUserAddress(e.target.value);
            }}
            placeholder="example@.ex.com"
            required
          />
        </div>
        <div className="col-6">
          <label htmlFor="current" className="col-form-label mt-auto">
            使用者身份
          </label>
          <p id="current">{currentUser.current}</p>
        </div>
        <div className="col-6">phone</div>
        <button
          className="btn btn-dark changeUser"
          onClick={hadelClickPatchUser}
        >
          儲存
        </button>
      </div>
      <div className="row profileRight profileRight2">
        <h2>修改密碼</h2>
        <hr />
        <div className="col-6">
          <label htmlFor="oldPassword" className="col-form-label  mt-auto">
            舊密碼
          </label>
          <input
            type="password"
            id="oldPassword"
            className="form-control"
            aria-describedby="passwordHelpInline"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            placeholder="舊密碼"
            required
          />
        </div>
        <div className="col-6">
          <label htmlFor="newPassword" className="col-form-label mt-auto">
            新密碼
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            aria-describedby="emailHelp"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            placeholder="新密碼"
            required
          />
        </div>
        <div className="col-6">
          <label htmlFor="checkPassword" className="col-form-label mt-auto">
            新密碼確認
          </label>
          <input
            type="password"
            className="form-control"
            id="checkPassword"
            aria-describedby="emailHelp"
            placeholder="新密碼確認"
            value={checkPassword}
            onChange={(e) => {
              setCheckPassword(e.target.value);
            }}
            required
          />
        </div>
        <button
          className="btn btn-dark changeUser"
          onClick={hadelClickPatchPassword}
        >
          儲存
        </button>
      </div>
    </div>
  );
};

export default Userprofile;

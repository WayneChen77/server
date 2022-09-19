import React, { useContext, useEffect } from "react";
import Getapi from "../apiaxios";
import { CommodityContext } from "../../App";
import { JumpContext } from "../../App";
import Card from "./card";
const Myproduct = ({ currentUser }) => {
  const jumpState = useContext(JumpContext);
  const setJump = jumpState[1];
  const tooadd = () => {
    setJump(1);
  };
  //取得商品 因為jserver問題 後端users無法靠網址抓到資料 這邊先取得所有 然後再塞選

  const useComfuncSet = useContext(CommodityContext);
  const myproductData = useComfuncSet.myproductData;
  const setMyproductData = useComfuncSet.setMyproductData;
  useEffect(() => {
    Getapi.getcommoditydata()
      .then((res) => {
        const pp = res.data.filter((p) => p.userId === currentUser.ID);
        setMyproductData(pp);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [myproductData.length, currentUser.ID, setMyproductData]);

  return (
    <div className="col">
      <div className="row  profileRight ">
        <div>
          <h2>我的商品</h2>
          <hr />
        </div>
        <button className="btn " onClick={tooadd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-bag-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
            />
          </svg>
        </button>
        <div className="row homeitem">
          {myproductData.map((data) => (
            <Card data={data} key={data.title + data.price} setJump={setJump} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myproduct;

import React, { useEffect, useState } from "react";
import Getapi from "../apiaxios";

import Card from "./card";
const Myclient = ({ currentUser }) => {
  //先取得商品資料 然後用商品抓取買家

  const [myclient, setMclient] = useState([]);
  useEffect(() => {
    Getapi.getcommoditydata()
      .then((res) => {
        const pp = res.data.filter((p) => p.userId === currentUser.ID);
        const _pp = pp.map((p) => p.id);
        for (let i = 0; i < _pp.length; i++) {
          Getapi.getmyclient(_pp[i]).then((res) => {
            setMclient((_myclient) => _myclient.concat(res.data.carts));
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currentUser.ID]);

  return (
    <div className="col">
      <div className="row  profileRight ">
        <div>
          <h2>我的客戶 </h2>
          <hr />
          <div className="row homeitem">
            {myclient.map((data) => (
              <Card data={data} key={data.title + data.userEmail} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myclient;

import React, { useState, useEffect, useContext } from "react";
import Getapi from "./apiaxios";
import { CommodityContext } from "../App";
import { useNavigate } from "react-router-dom";
import { CurrentContext } from "../top-compontent";

const Searchwcart = ({ searchCommodity, setCommodityItem }) => {
  //取得輸入值
  const [input, setInput] = useState("");
  const handelChangeInput = (e) => {
    setInput(e.target.value);
  };

  //input=''時抓取資料顯示畫面
  //這邊如果將判斷式拿掉改成input畫面將隨輸入隨時改變
  //這邊使用eslint-disable禁用規則避免程式警告
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //如果拿掉[input, searchCommodity, setCommodityItem]);中的
  //searchCommodity, setCommodityItem就會警告(依賴問題) 原因未知
  //須更了解effect原理
  useEffect(() => {
    if (input === "") {
      let newdata = [...searchCommodity];
      setCommodityItem(newdata);
    }
  }, [input, searchCommodity, setCommodityItem]);

  //點擊搜尋抓取畫面
  const hadeelClicksearch = () => {
    const newdata = [...searchCommodity];

    const _newdata = newdata.filter((data) => data.title.includes(input));
    setCommodityItem(_newdata);
    //這邊也能搜尋

    // newdata = newdata.filter((data) =>
    // const aa=data.title.match(input));
    // return !!aa
    // setCommodityItem(newdata);
  };

  //

  //購物車數量
  const useComfuncset = useContext(CommodityContext);
  const { cartnumdata } = useComfuncset;
  const { setCartumData } = useComfuncset;

  useEffect(() => {
    Getapi.getcarts()
      .then((res) => {
        const _cartnumdata = res.data
          .map((p) => p.quantity)
          .reduce((acc, item) => (acc += item), 0);

        setCartumData(_cartnumdata);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setCartumData]);
  //是否登入顯示與連結
  const Navigate = useNavigate();
  const currentUserset = useContext(CurrentContext);
  const CurrentUser = currentUserset[0];
  const handelClickMycarts = () => {
    if (CurrentUser) {
      Navigate("/mycarts");
    } else {
      Navigate("/login");
    }
  };

  return (
    <div className=" row pt-3  ">
      <h1 className=" col-2  text-start">Store</h1>

      <div className="search col-9 col-md-8 ">
        <input
          type="text"
          className="h-65"
          placeholder="search"
          // 監聽鍵盤動作
          // onCompositionStart={handleComposition}
          // onCompositionUpdate={handleComposition}
          // onCompositionEnd={handleComposition}
          //bug跳過
          onChange={handelChangeInput}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={hadeelClicksearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <div className="col-2  text-end cart">
        <button
          onClick={handelClickMycarts}
          className=" position-relative btn text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>

          {CurrentUser && (
            <span className="position-absolute top-0 start-100  badge rounded-pill bg-danger">
              +{cartnumdata}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </div>
      <hr className="searchhr" />
    </div>
  );
};

export default Searchwcart;

import React, { createContext, useState } from "react";
import "./styles/style.css";
import Top from "./top-compontent";
import { useComfunc } from "./compontent/comfunc";
//這邊為context輸出 如果後面韋null
// 下方Provider value={[jump, setJump]}就一定要有值
// context可以這樣{a:XXX,b:xxx}可以寫很多東西 所以建議另外開一個資料夾導入
export const JumpContext = createContext(null);
export const PatchContext = createContext(null);
//我是下面練習寫法使用的contex物件
export const CommodityContext = createContext(null);

function App() {
  //嘗試進階寫法練習
  const useComfuncset = useComfunc();
  //然後將他的值丟入contex 其他地方利用contex連過來抓取這個model

  //這邊式設定彈跳
  const [jump, setJump] = useState(0);

  //修改資料檔案
  const [patchdata, setPatchData] = useState({});

  return (
    <div className="App">
      {/* <PatchContext.Provider value={{ a: [patchdata, setPatchData], b: 526 }}></PatchContext.Provider> */}
      <CommodityContext.Provider value={useComfuncset}>
        <PatchContext.Provider value={[patchdata, setPatchData]}>
          <JumpContext.Provider value={[jump, setJump]}>
            <Top />
          </JumpContext.Provider>
        </PatchContext.Provider>
      </CommodityContext.Provider>
    </div>
  );
}

export default App;

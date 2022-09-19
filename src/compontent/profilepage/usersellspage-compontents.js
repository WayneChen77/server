import React from "react";
import Mycarts from "../mycarts-component";

const Usersellspage = () => {
  return (
    <div className="col">
      <div className="row  profileRight profileRight1">
        <div>
          <h2>已選購商品</h2>
          <hr />
          <Mycarts />
        </div>
      </div>
    </div>
  );
};

export default Usersellspage;

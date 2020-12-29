import React from "react";
import HeaderWp from "./whatsapp/Components/HeaderWp";
import TileWp from "./whatsapp/Components/TileWp";

const Whatsapp = () => {
  return (
    <div className="whatsapp__app">
      <HeaderWp />
      <TileWp />
      <TileWp msgStatus="fa fa-check-circle" />
      <TileWp msgStatus="fa fa-check-circle" />
      <TileWp />
      <TileWp />
      <TileWp />
      <TileWp msgStatus="fa fa-check-circle" />
      <TileWp msgStatus="fa fa-check-circle" />
      <TileWp msgStatus="fa fa-check-circle" />
      <TileWp msgStatus="fa fa-check-circle" />
    </div>
  );
};

export default Whatsapp;

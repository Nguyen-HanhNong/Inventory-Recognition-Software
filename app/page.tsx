'use client';

import React from "react";
import ItemsPage from "./_components/items/items";
import NavBar from "./_components/navbar/navbar";

export default function Page(): React.ReactNode {
  return (
    <div id="wrapper-div">
      <NavBar />
      <ItemsPage />
    </div>
  )
}
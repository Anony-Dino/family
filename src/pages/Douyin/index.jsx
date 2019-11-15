import React, { Component } from "react";
import PictureTextList from "./components/PictureTextList";
import CompositeFilter from "./components/CompositeFilter";

export default function() {
  return (
    <div className="Douyin-page">
      <CompositeFilter />
      {/* 图文列表 */}
      <PictureTextList />
    </div>
  );
}

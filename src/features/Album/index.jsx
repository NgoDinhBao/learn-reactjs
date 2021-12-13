import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

AlbumFeature.defaultProps = {
  todoList: [],
};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "A",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/3/a/1/a/3a1aad7f3f927dece72b0d57642f5c8a.jpg?fs=MTYzODk3MzIzMzYxMHx3ZWJWNHw",
    },
    {
      id: 2,
      name: "B",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/c/2/8/fc28119fe63bad8efc51cdb1f2d13a69.jpg?fs=MTYzODk3MzIzMzYxMHx3ZWJWNHw",
    },
    {
      id: 3,
      name: "C",
      thumbnaiUrl:
        "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/f/2/d/5f2d9c8e7e39c0776a254980a26ec63d.jpg?fs=MTYzODk3MzIzMzYxMHx3ZWJWNHw",
    },
  ];

  return (
    <div>
      <h2>My Music</h2>
      <AlbumList albumList={albumList}/>
    </div>
  );
}

export default AlbumFeature;

import React from "react";
import styles from "./PhotosLoadMore.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import Loading from "./Helper/Loading";

function PhotosLoadMore() {
  const { pages, inifinite, loading } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(loadNewPhotos(pages + 1));
  }

  if (loading) return <Loading />;
  if (!inifinite) return null;
  return (
    <button className={styles.button} onClick={handleClick}>
      +
    </button>
  );
}

export default PhotosLoadMore;

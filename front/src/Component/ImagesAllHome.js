import React from "react";
import ImageList from '@mui/material/ImageList';
import ImagesApi from "../api/Api";
import ImageItem from "./ImageItem";

export default function ImagesAllHome() {
  const images = ImagesApi();

  return (
    <ImageList sx={{ width: 500, height: 400 }} cols={3}>
      {images.map(image => (
        <ImageItem key={image.id} image={image} />
      ))}
    </ImageList>
  );
}

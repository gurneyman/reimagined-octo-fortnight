import React, { useState, useEffect } from "react";

import "./Giphy.css";

export default function Giphy({ image }) {
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    setImgUrl(image.images.fixed_width_small_still.url);
    const img = new Image();
    img.src = image.images.fixed_width.url;
    img.onload = setImgUrl(img.src);
  }, [image])  
  return (
    <div
      tabIndex="0"
      className="giphy"
    >
        <img src={imgUrl} alt={image.title}/>
    </div>
  );
}

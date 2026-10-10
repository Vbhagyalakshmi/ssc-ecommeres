"use client";

import { useState } from "react";

const fallback = "/images/categories/women.jpg";

export default function ProductImage({ src, alt, ...props }) {
  const [image, setImage] = useState(src);
  return <img src={image} alt={alt} onError={() => setImage(fallback)} {...props} />;
}

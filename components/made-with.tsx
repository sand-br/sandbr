"use client";

import React, { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";

export function FeitoCom() {
  const [isHeart, setIsHeart] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHeart(prev => !prev);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [isHeart]);

  return (
    <p className="flex gap-1">
      <span className="text-[#EB2939]">feito</span>
      <span> com</span>
      <span className="text-[#0071ce]">{isHeart ? <Heart /> : <Star />}</span>
      <span>no </span>
      <span className="text-[#EB2939]">pará</span>
    </p>
  );
}
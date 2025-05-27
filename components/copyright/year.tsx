"use client";

import { useState, useEffect } from "react"

export const Year = () => {
  const [year, setYear] = useState<number>()
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  return <>{year}</>;
}
;
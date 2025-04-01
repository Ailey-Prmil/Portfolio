"use client";
import { ReactNode } from "react";
import "./Timeline.scss";

export default function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {children}
    </div>
  );
}

"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Timeline.scss";

interface TimelinePointProps {
  startDate: string;
  endDate: string;
  title: string;
  organization: string;
  description: string[];
}

export default function TimelinePoint({
  startDate,
  endDate,
  title,
  organization,
  description,
}: TimelinePointProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="timeline-point"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="timeline-content">
        <div className="date">
          {startDate} - {endDate}
        </div>
        <h3 className="title">{title}</h3>
        <h4 className="organization">{organization}</h4>
        <div className="description">
          {description.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </div>
      <div className="timeline-marker"></div>
    </motion.div>
  );
}

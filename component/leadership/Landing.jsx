import React, { useRef, useEffect, useState } from "react";
import styles from "./leader.module.scss";

export default function Landing(props) {
  const { contents } = props;
  return (
    <section
      className={`${styles.spotlight}`}
      style={{ "--bgcolor": `${contents.bgcolor}` }}
    >
      <div className="container container--small">
        <div className="md:flex items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left py-10 md:p-0 mb-5 md:m-0">
            <h2>{contents.title}</h2>
            <h3 className="mb-10 md:mb-28 font-semibold text-lg">{contents.subtitle}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

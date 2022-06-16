import React from "react";
import SimpleContainer from "../simpleContainer/SimpleContainer";
import styles from "./heroBanner.module.css";

export default function HeroBanner() {
    return(
        <div className={`${styles.HeroBanner}`}>
        <SimpleContainer  />
        </div>

    )
}
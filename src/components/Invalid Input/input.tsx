import React from "react";
import styles from "./input.module.css";

export default function Input() {
	return (
        <div className={styles.wrapper}>
            <input
                type="text"
                pattern="[A-Za-z ]*"
                placeholder="Only enter text"
                autoComplete="off"
                autoCorrect="off"
                className={styles.input}
            />
        </div>
	);
}

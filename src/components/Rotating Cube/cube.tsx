import React from "react";
import styles from "./cube.module.css";

export default function Cube() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cube}>
				<div className={styles.front}>Front</div>
				<div className={styles.bottom}>Bottom</div>
			</div>
		</div>
	);
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import Cube from "@/components/Rotating Cube/cube";
import Input from "@/components/Invalid Input/input";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Cube />
			<Input />
		</div>
	);
}

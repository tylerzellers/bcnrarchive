import React from "react";
import styles from "./BottomBar.module.css";

const images = ["https://ih1.redbubble.net/image.4454985681.9788/raf,360x360,075,t,fafafa:ca443f4786.jpg",
                "https://sandbag.s3.eu-west-1.amazonaws.com/bcnr-logo.png",
                "https://cdn.accentuate.io/290323890365/18815516508349/BCNR-new-logo-v1665582236207.png?800x226",
                "https://img.merchbar.com/product/74/9510/7791873523883/TBdFdj-4superman.png?q=40&ar=1:1&w=1400",
                "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da843c1ace45fda1b612307868bd"];

export default function BottomBar() {
    return (
        <div className={styles["bottom-bar"]}>
            <div className={styles["image-wrapper"]}>
                {images.concat(images).map((src, index) => (
                    <img key={index} src={src} alt={`${index + 1}`} />
                ))}
            </div>
        </div>
    );
}
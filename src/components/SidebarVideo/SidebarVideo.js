import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import style from "./SidebarVideo.module.css"

export default function SidebarVideo() {
    // State for video list and selected video
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Fetch video list from JSON
    useEffect(() => {
        fetch("/vidlist.json")  // Adjust path if needed
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
                setSelectedVideo(data[0]); // Default to first video
            })
            .catch((error) => console.error("Error loading videos:", error));
    }, []);

    return (
        <div className={style["container"]}>
            <nav className={style["sidebar"]}>
                <h2>Video List</h2>
                <ul className={style["video-list"]}>
                    {videos.map((video, index) => (
                        <li 
                            key={index} 
                            className={style["video-item"]}
                            onClick={() => setSelectedVideo(video)}
                        >
                            <p>{video.date}</p>
                            <p>{video.description}</p>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Video Player */}
            <div className={style["video-container"]}>
                {selectedVideo && (
                    <>
                        {/*<h2 className={style["video-title"]}>{selectedVideo.description}</h2>
                        <p className={style["video-date"]}>{selectedVideo.date}</p>*/}
                        <ReactPlayer url={selectedVideo.url} controls className={style["video-player"]} />
                    </>
                )}
            </div>
        </div>
    );
}

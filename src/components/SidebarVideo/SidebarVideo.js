import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import style from "./SidebarVideo.module.css"

export default function SidebarVideo() {
    // State for video list and selected video
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [expandedYears, setExpandedYears] = useState({});
    const playerRef = useRef(null); // Ref for ReactPlayer
    const [playing, setPlaying] = useState(false);

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

    //Function to convert time (MM:SS) to seconds
    const convertTimeToSeconds = (time) => {
        const [minutes, seconds] = time.split(":").map(Number);
        return minutes * 60 + seconds;
    };

    // Group videos by year
    const groupedByYear = videos.reduce((acc, video) => {
        const dateParts = video.date.split("-"); // ["YYYY", "MM", "DD"]
        const videoYear = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2])).getFullYear();
        if (!acc[videoYear]) {
            acc[videoYear] = [];
        }
        acc[videoYear].push(video);
        return acc;
    }, {});

    const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

    const toggleYear = (year) => {
        setExpandedYears((prevState) => ({
            ...prevState,
            [year]: !prevState[year], // Toggle the specific year
        }));
    };

    return (
        <div className={style["container"]}>
            <nav className={style["sidebar"]}>
                <h2>Video List</h2>
                <ul className={style["video-list"]}>
                    {sortedYears.map((year) => (
                        <li
                            key={year}
                            className={`${style["video-item"]} ${expandedYears[year] ? style["open"] : ""}`}
                        >
                            <div
                                className={style["year-header"]}
                                onClick={() => toggleYear(year)}
                            >
                                <span>{year}</span>
                            </div>

                            {expandedYears[year] && (
                                <ul className={style["sub-menu"]}>
                                    {groupedByYear[year].map((video, index) => {
                                        const dateParts = video.date.split("-"); // ["YYYY", "MM", "DD"]
                                        const formattedDate = `${dateParts[1]}/${dateParts[2]}`; // "MM/DD"

                                        return (
                                            <li
                                                key={index}
                                                className={style["video-subitem"]}
                                                onClick={() => setSelectedVideo(video)}
                                            >
                                                <p>{`${formattedDate} - ${video.description}`}</p>
                                            </li>
                                        );
                                    })}

                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Video Player */}
            <div className={style["video-container"]}>
                {selectedVideo && (
                    <>
                        <ReactPlayer 
                            ref={playerRef}
                            url={selectedVideo.url} 
                            controls 
                            playing={playing}
                            className={style["video-player"]} 
                        />

                        {/* Setlist Section */}
                        {selectedVideo.setlist && (
                            <div className={style["setlist-container"]}>
                                <h3>Setlist</h3>
                                <ul className={style["setlist"]}>
                                    {selectedVideo.setlist.map((item, index) => (
                                        <li key={index} 
                                            className={style["setlist-item"]}
                                            onClick={() => {
                                                if (playerRef.current) {
                                                    playerRef.current.seekTo(convertTimeToSeconds(item.time), "seconds");
                                                    setPlaying(true);
                                                }
                                            }}
                                        >
                                            <span className={style["setlist-time"]}>{item.time}</span> - 
                                            <span className={style["setlist-song"]}>{item.song}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}
            </div>

        </div>
    );
}

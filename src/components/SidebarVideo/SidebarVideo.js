import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import style from "./SidebarVideo.module.css"

export default function SidebarVideo() {
    // State for video list and selected video
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [expandedYears, setExpandedYears] = useState({});

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

    // Group videos by year
    const groupedByYear = videos.reduce((acc, video) => {
        const videoYear = new Date(video.date).getFullYear();
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
                                    {groupedByYear[year].map((video, index) => (
                                        <li
                                            key={index}
                                            className={style["video-subitem"]}
                                            onClick={() => setSelectedVideo(video)}
                                        >
                                            <p>{`${new Date(video.date).toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" })} - ${video.description}`}</p>
                                        </li>
                                    ))}
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
                        <ReactPlayer url={selectedVideo.url} controls className={style["video-player"]} />
                    </>
                )}
            </div>
        </div>
    );
}

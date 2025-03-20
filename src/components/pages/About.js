import { Mail } from "lucide-react";
import "./About.css";

export default function About(){
    return (
        <>
        <div align="left">
            <h1>Project Goal:</h1>
            <div>This website was created as a personal project to better my web development skills as well as contribute towards my interest in data preservation for one of my favorite bands. I am not profiting off of any of the content shared on this website and will take content down if requested.</div>
            <h1>Contact:</h1>
            <div>Contributions are very much welcome! If you have any media that is not featured on this site, please feel free to <a href="mailto:tylerzellers731@gmail.com" target="_blank" rel="noopener noreferrer">email</a> me.</div>
            <br/>
            <p>Issues regarding the website can also be emailed, but I am trying to model an open source project, so issues filed on <a href="https://github.com/tylerzellers/bcnrarchive/issues" target="_blank" rel="noopener noreferrer">github</a> are vastly preferred!</p>
            <h1>Tasks:</h1>
            <ul>
                <li>responsive window sizing</li>
                <li>storing videos without referencing a link</li>
                <li>clean up file directory</li>
            </ul>
        </div>

        <div className="about-container">
            <a href="https://github.com/tylerzellers" target="_blank" rel="noopener noreferrer" className="about-link">
                <img src="https://github.com/tylerzellers.png" alt="GitHub Profile" className="about-icon" />
                <span>GitHub</span>
            </a>

            <a href="mailto:your.email@example.com" className="about-link">
                <Mail className="about-icon" size={48} />
                <span>Email</span>
            </a>
        </div>
        </>
    );
}
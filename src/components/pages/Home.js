import style from "./Home.module.css"

export default function Home(){
    return (
        <>
            <div className={style["homepage-text"]}> 
                <p>Black Country, New Road Archive</p>
            </div>

            <div className={style["img-container"]}>
                <img src="https://transgressiverecords.com/wp-content/uploads/2023/09/Screenshot-2025-01-30-at-10.44.52.png" alt="Forever Howlong" className={style["homepage-img"]}/>
            </div>

            <div className={style["homepage-text"]}> 
                <p>Support the band through their offical website <a href="https://blackcountrynewroad.com/">here!</a></p>
            </div>

            <div className={style["album-container"]}>
                <div className={style["album"]}>
                    <a href="https://bcnr.lnk.to/ftftAP" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.squarespace-cdn.com/content/v1/5ec6a8301f93db7c497048f8/2f4bdc9a-3ed7-43c4-8508-6cdee79f6b88/for-the-first-time-main.jpg?format=750w" alt="For the first time"/>
                    </a>
                </div>
                <div className={style["album"]}>
                    <a href="https://bcnr.lnk.to/afutAP" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.squarespace-cdn.com/content/v1/5ec6a8301f93db7c497048f8/23191a4d-6cd1-4279-a86e-a19b38a18e2f/ants-from-up-there-deluxe-main.jpg?format=750w" alt="Ants From Up There"/>
                    </a>
                </div>
                <div className={style["album"]}>
                    <a href="https://bcnr.lnk.to/bush-hallAP" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.squarespace-cdn.com/content/v1/5ec6a8301f93db7c497048f8/122cb1f0-74e2-4963-bffa-c9c58591473c/live-at-bush-hall-main.jpg?format=750w" alt="Live at Bush Hall"/>
                    </a>
                </div>
                <div className={style["album"]}>
                    <a href="https://bcnr.lnk.to/forever-howlongAP" target="_blank" rel="noopener noreferrer">
                        <img src="https://images.squarespace-cdn.com/content/v1/5ec6a8301f93db7c497048f8/0324122c-7b42-4f16-b2f3-eaa6ab50861e/ZENDNL314_PACKSHOT_3000.jpg?format=750w" alt="Forever Howlong"/>
                    </a>
                </div>
            </div>
        </>
    );
}
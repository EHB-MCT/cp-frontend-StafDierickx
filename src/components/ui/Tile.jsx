import Styles from "@/styles/components/Tile.module.css"

import notFound from "@/assets/img-not-found.png"

function Tile({fairytale, nameStudent, fairytaleLink, imgThumbnail}) {
    return (
        <div className={Styles.tile} onClick={() => window.location.href = fairytaleLink}>
            <img src={imgThumbnail ? imgThumbnail : notFound} alt="" />
            <div>
                <div className={Styles.content}>
                    <p className={Styles.title}>{fairytale}</p>
                    <p className={Styles.text} >{nameStudent}</p>
                </div>
            </div>
        </div>
    );
}

export default Tile
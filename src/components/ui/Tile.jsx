import Styles from "@/styles/components/Tile.module.css"
import { useNavigate } from 'react-router';
import notFound from "@/assets/img-not-found.png"

function Tile({fairytale, nameStudent, id, imgThumbnail}) {
    const navigate = useNavigate();
    const handleClick = () => {
        // URLSearchParams automatically handles encoding
        const params = new URLSearchParams();
        params.set('query', id);
        navigate(`/story?${params.toString()}`);
    }

    return (
        <div className={Styles.tile} onClick={handleClick}>
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
import { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader"
import Styles from "@/styles/pages/MakingOf.module.css";
import dummydata from "@/assets/dummy-data.json"
import notFound from "@/assets/img-not-found.png"

const TitleDivider = ({text}) => {
    return (
        <div className={Styles.titleDivider}>
            <p>{text}</p>
            <hr />
        </div>
    )
}

function MakingOf() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        console.log("Loading dummy data...");

        // let data = dummydata[0]
        // data.image = img

        setData(dummydata[0]);
    }, []); // Empty dependency array means this effect runs once on mount
    
    return (
        <>
            <SectionHeader text="Making of" />
            <div className={Styles.makingOf}>
                <div className={Styles.bannerImg}>
                    <img
                        src={data && data.imgBanner ? data.imgBanner : notFound}
                        alt=""
                    />
                    <div>
                        <div>
                            <p className={Styles.storyTitle}> {data && data.fairytale}</p>
                            <p className={Styles.creator}>{data && data.nameStudent}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <TitleDivider text={"video - explainer movie"} />
                    </div>
                    <div className={Styles.videoExplainer}>
                        <div>
                            {data && data.videoExplainer ? data.videoExplainer : "No video explainer available"}
                        </div>
                        <div>
                            {data && data.description}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    <TitleDivider text={"extra beeldmateriaal"} />
                    </div>
                    <div className={Styles.ExtraImage}>
                        {data &&
                        data.imgsExtra ?
                        data.imgsExtra.map((item, index) => (
                            <img 
                                key={index}
                                src={item}
                            />
                        )) :
                        (<img src={notFound} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakingOf
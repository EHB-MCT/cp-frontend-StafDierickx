import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader"
import Styles from "../styles/pages/MakingOf.module.css";
import dummydata from "../assets/dummy-data.json"
import img from "../assets/dummy.jpeg"

function MakingOf() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        console.log("Loading dummy data...");

        let data = dummydata[0]
        data.image = img

        setData(dummydata[0]);
    }, []); // Empty dependency array means this effect runs once on mount
    
    return (
        <>
            <SectionHeader text="Making of" />
            <div className={Styles.makingOf}>
                <div className={Styles.bannerImg}>
                    <img src={data && data.image} alt="" />
                    <div>
                        <div>
                            <p className={Styles.storyTitle}> {data && data.title}</p>
                            <p className={Styles.creator}>{data && data.creator}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className={Styles.title}>Video - Explainer Movie</p>
                    </div>
                    <div>
                        <div>
                            {data && data.video}
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    <p className={Styles.title}>Extra beeldmateriaal</p>
                    </div>
                    <div>
                        {data && JSON.stringify(data.extraMaterial)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MakingOf
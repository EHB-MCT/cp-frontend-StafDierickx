import { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader"
import Styles from "@/styles/pages/MakingOf.module.css";
import LoadingElement from "@/components/ui/LoadingElement.jsx";
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
    const [storyData, setStoryData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        // fetch json array from api
        console.log("Fetching sprookjes data...")
        fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
          .then(response => response.json())
          .then(data => {
            console.log("Data fetched:", data)

            const storydata = dummydata.find(story => story.id === "staf-dierickx-aladin-en-de-wonderlamp")
            console.log("Story data:", storydata)

            setStoryData(storydata)
            setIsLoading(false)
          })
          .catch(error => console.error(error))
    }, []); // Empty dependency array means this effect runs once on mount
    
    if (isLoading)
        return (
            <LoadingElement />
        )

    return (
        <>
            <SectionHeader text="Making of" />
            <div className={Styles.makingOf}>
                <div className={Styles.bannerImg}>
                    <img
                        src={storyData && storyData.imgBanner ? storyData.imgBanner : notFound}
                        alt=""
                    />
                    <div>
                        <div>
                            <p className={Styles.storyTitle}> {storyData && storyData.fairytale}</p>
                            <p className={Styles.creator}>{storyData && storyData.nameStudent}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <TitleDivider text={"video - explainer movie"} />
                    </div>
                    <div className={Styles.videoExplainer}>
                        <div>
                            {storyData && storyData.videoExplainer ?
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src={storyData.videoExplainer} 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen>
                                </iframe>
                                : "Geen video beschikbaar"
                            }
                        </div>
                        <div>
                            {storyData && storyData.description}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    <TitleDivider text={"extra beeldmateriaal"} />
                    </div>
                    <div className={Styles.ExtraImage}>
                        {storyData &&
                        storyData.imgsExtra ?
                        storyData.imgsExtra.map((item, index) => (
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
import { useEffect, useContext, useState } from "react";
import SectionHeader from "@/components/SectionHeader"
import Styles from "@/styles/pages/MakingOf.module.css";
import LoadingElement from "@/components/ui/LoadingElement.jsx";
import dummydata from "@/assets/dummy-data.json"
import { useSearchParams } from "react-router";
import notFound from "@/assets/img-not-found.png"

import { CurrentStoryContext } from "@/context/CurrentStoryContext.jsx";

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
    const { currentStory, setCurrentStory} = useContext(CurrentStoryContext)
    const [searchParams] = useSearchParams();

    // load correct story information
    useEffect(() => {
        setIsLoading(true)
        const storyId = searchParams.get("storyId")
        if (storyId !== undefined) {
            console.log(storyId)
            if (currentStory != undefined && currentStory.id == storyId) {
                console.log("story data found")
                setStoryData(currentStory)
                setIsLoading(false)
            }
            else
                // if not found, fetch it by id
                fetchStory(storyId)

        }
    }, [])

    function fetchStory(storyId) {
        setIsLoading(true)
        console.log("Fetching sprookjes data...")
        fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json")
          .then(response => response.json())
          .then(data => {
            console.log("Data fetched:", data)

            const storydata = dummydata.find(story => story.id === storyId)
            console.log("Story data:", storydata)

            setCurrentStory(storyData)
            setStoryData(storydata)
            setIsLoading(false)
          })
          .catch(error => console.error(error))
    }
    
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
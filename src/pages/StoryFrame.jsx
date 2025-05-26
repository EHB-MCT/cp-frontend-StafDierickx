// This page is for viewing stories of other students
// Could not come up with a better name
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

import LoadingElement from "@/components/ui/LoadingElement.jsx";

function StoryFrame() {
    const [isLoading, setIsLoading] = useState(true);
    const [storyLink, setStoryLink] = useState("");

    const style = {
        iframe: {
            width: "100%",
            height: "100vh",
            border: "none",
            overflow: "hidden"
        }
    }

    const [searchParams] = useSearchParams();
    useEffect(() => {
        setIsLoading(true);

        // fetch json array from api
        console.log("Fetching sprookjes data...");
        fetch(
            "https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
        )
            .then((response) => response.json())
            .then((data) => {

                const story = data.find(
                    (sprookje) => sprookje.id == searchParams.get("storyId")
                );
                
                setStoryLink(story.fairytaleLink)
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    }, []);

    if (isLoading) return <LoadingElement />;

    return (
        <div style={style.iframe}>
            <iframe 
                src={storyLink} 
                title="Story Frame"
                style={style.iframe}
            />
        </div>
    );
}

export default StoryFrame;

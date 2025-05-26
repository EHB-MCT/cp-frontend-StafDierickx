import React from "react";
import { useState, createContext } from "react";

export const CurrentStoryContext = createContext();

export function StoryProvider({ children }) {
    const [currentStory, setCurrentStory] = useState();

    return (
        <CurrentStoryContext.Provider value={{ currentStory, setCurrentStory }}>
            {children}
        </CurrentStoryContext.Provider>
    )
} 

export default StoryProvider;
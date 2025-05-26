import React from "react";
import { useState, createContext } from "react";

export const CurrentStoryContext = createContext();

// a context provided for passing the current story info around.
// should be reduce the amount of api calls
export function CurrentStoryProvider({ children }) {
    const [currentStory, setCurrentStory] = useState();

    return (
        <CurrentStoryContext.Provider value={{ currentStory, setCurrentStory }}>
            {children}
        </CurrentStoryContext.Provider>
    )
} 

export default CurrentStoryProvider;
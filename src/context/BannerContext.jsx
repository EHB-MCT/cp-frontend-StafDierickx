import React from "react";
import { useState, createContext } from "react";

export const BannerExpandContext = createContext();

export function BannerProvider({ children }) {
    const [bannerExpand, setBannerExpand] = useState(false);

    return (
        <BannerExpandContext.Provider value={{ bannerExpand, setBannerExpand }}>
            {children}
        </BannerExpandContext.Provider>
    )
} 

export default BannerProvider;
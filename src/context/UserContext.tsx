"use client"
import React, { createContext, useContext, useState } from "react";

type ContextValueType = {
    setIsExpandSidebar: () => void;
}

//create context hook
export const useFunctionContext = () => useContext(FunctionContext)
export const useIsExpandSidebarContext = () => useContext(IsExpandSidebarContext)

//create context
export const FunctionContext = createContext<ContextValueType>({} as ContextValueType);
export const IsExpandSidebarContext = createContext<boolean>(false)

//UserContext
export const UserContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [isExpandSidebar, setIsExpandSidebar] = useState<boolean>(false);

    const contextValue: ContextValueType = {
        setIsExpandSidebar: () => {
            setIsExpandSidebar(!isExpandSidebar);
        }
    }

    return (
        <FunctionContext.Provider value={contextValue}>
            <IsExpandSidebarContext.Provider value={isExpandSidebar}>
                {children}
            </IsExpandSidebarContext.Provider>
        </FunctionContext.Provider>
    )
}
import { createContext, useReducer, useContext, useEffect } from "react";
import configReducer, { initialCIOConfigState, operations } from "@/helpers/cioConfigReducer"

const CioConfigContext = createContext(initialCIOConfigState);

export default function useConfig() {
  const context = useContext(CioConfigContext);

  if (context === undefined) {
    throw new Error("useConfig must be used within CioConfigContext")
  }

  return context
}

export const CIOConfigProvider = ({ children }) => {
  const [state, dispatch] = useReducer(configReducer, initialCIOConfigState);
  const setState = function(actions=[]){
    return dispatchOperations(dispatch,actions);
  }
  
  const value = {
    ...state,
    setState,
    operations
  };
  return <CioConfigContext.Provider value={value}>{children}</CioConfigContext.Provider>;
};



function dispatchOperations(updateState,actions) {
  return updateState({operations:[...actions]})
}
import React from 'react'
export const MultiStepContext = React.createContext(null)
export const useMultiStep = () => { return React.useContext(MultiStepContext) } // Used because other approaches were less performant, esp. the cloning approach
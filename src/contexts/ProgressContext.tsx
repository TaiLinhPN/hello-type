import { createContext, ReactNode } from "react"

interface ProcessContextProviderProp {
  children: ReactNode;
}

interface ProcessContextDefault {
  lastTime: string,
  status: string
}
const ProgressDefault = {
    lastTime: '9/9/2029',
    status: 'sleepy'
}
export const ProgressContext = createContext<ProcessContextDefault>(ProgressDefault);

const ProgressContextProvider = ({ children }: ProcessContextProviderProp) => {
  return (
    <ProgressContext.Provider value={ProgressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
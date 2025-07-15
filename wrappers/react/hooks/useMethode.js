import { createContext, useContext, useRef } from "react";

const UIContext = createContext(null);
const useMethode = () => useContext(UIContext);

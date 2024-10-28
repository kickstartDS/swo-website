import { FC, PropsWithChildren, createContext, useContext } from "react";

const LanguageContext = createContext<string>("de");
export const LanguageProvider: FC<PropsWithChildren<{ language: string }>> = (
  props
) => {
  console.log("provider language", props.language);
  return (
    <LanguageContext.Provider value={props.language}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

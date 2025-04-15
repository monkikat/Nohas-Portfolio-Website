import { createContext, useContext, useRef } from "react";

type ScrollContextType = {
  scrollToSection: (section: string) => void;
  registerSection: (name: string, ref: React.RefObject<HTMLDivElement | null>) => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement | null> }>({});

  const scrollToSection = (section: string) => {
    sectionRefs.current[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const registerSection = (name: string, ref: React.RefObject<HTMLDivElement | null>) => {
    sectionRefs.current[name] = ref;
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, registerSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollCustom = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used inside ScrollProvider");
  return context;
};
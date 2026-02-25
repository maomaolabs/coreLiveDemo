"use client";

export default function useWelcomeComponent() {
  const checkStorage = (key: string) => {
    if (typeof window === "undefined") return null;
    const storedDatas = localStorage.getItem(key);
    if (storedDatas !== null) {
      try {
        return JSON.parse(storedDatas);
      } catch {
        return null;
      }
    }
    return null;
  };

  const shouldShowWelcome = () => {
    if (typeof window === "undefined") return false;

    const welcomeData = checkStorage("maomao_welcome_show");

    if (welcomeData !== null) return welcomeData;

    try {
      localStorage.setItem("maomao_welcome_show", JSON.stringify(true));
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }

    return true;
  };

  return { shouldShowWelcome };
}
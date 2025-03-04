"use client";

const getTheme = (userPreference) => {
  if (userPreference) {
    return userPreference;
  }

  if (typeof window !== "undefined" && window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }

  return "light";
};

export default getTheme;

import React, { createContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};

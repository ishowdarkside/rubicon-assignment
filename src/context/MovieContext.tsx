import React, { createContext, useContext, useState } from "react";
import { SearchQueryType } from "../types/MovieType";

interface contextTypes {
  selectedResults: string;
  setSelectedResults: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchResponse: SearchQueryType | null;
  setSearchResponse: React.Dispatch<
    React.SetStateAction<SearchQueryType | null>
  >;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const contextItem = createContext<contextTypes | null>(null);

export default function MovieContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedResults, setSelectedResults] = useState("tv");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResponse, setSearchResponse] = useState<SearchQueryType | null>(
    null
  );
  return (
    <contextItem.Provider
      value={{
        selectedResults,
        setSelectedResults,
        searchQuery,
        setSearchQuery,
        isSearching,
        setIsSearching,
        searchResponse,
        setSearchResponse,
      }}
    >
      {children}
    </contextItem.Provider>
  );
}

export function useMovieContext() {
  const data = useContext(contextItem);
  if (!data) throw new Error("YOU CANT USE MOVIE CONTEXT HERE");
  return data;
}

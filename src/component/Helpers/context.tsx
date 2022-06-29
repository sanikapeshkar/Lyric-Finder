import { createContext } from "react";

export interface AppContextInterface {
  artist: string;
  track: string;
  album: string;
  setArtist?: (open: any) => any;
  setTrack?: (open: any) => any;
  setLyricsState?: (open: any) => any;
  setSearchState?: (open: any) => any;
}

export const LyricsContext = createContext<AppContextInterface>({
  artist: "",
  track: "",
  album: "",
  setArtist: () => {},
  setTrack: () => {},
  setLyricsState: () => {},
  setSearchState: () => {},
});

// Provider in your app

import {Artist} from "./artist";

export interface Track {
  id: string;
  title: string;
  path: string;
  explicit: boolean;
  album_id: string | null;
  owner_id: string;
  genre_id: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  likes_count: number;
  owner: Artist;
  features: Artist[]; // Replace `any[]` with the correct type if available.
  album: any | null; // Replace `any` with the correct type if available.
}

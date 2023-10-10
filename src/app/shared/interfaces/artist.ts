import {Track} from "./track";

export interface Artist {
  id: string,
  name: string,
  singles_count: number,
  deleted_at?: string,
  created_at: string,
  updated_at?: string
  own_tracks: Track[]
  feature_tracks?: Track[]
  feature_tracks_count: number
}

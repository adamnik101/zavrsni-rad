import {Track} from "./track";

export interface Genre {
  id : string,
  name : string,
  cover: string,
  hex_color: string,
  deleted_at? : string,
  created_at? : string,
  updated_at? : string,
  tracks?: Track[]
}

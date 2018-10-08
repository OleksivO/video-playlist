import {Video} from "./video";

export interface PlayList {
  name: string,
  id?: string,
  videos: Video[]
}

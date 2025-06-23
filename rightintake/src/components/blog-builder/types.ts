export type BlockType =
  | "text"
  | "image"
  | "quote"
  | "list"
  | "video"
  | "cta"
  | "button";

export interface BlogBlock {
  type: BlockType;
  data: any; // will be typed per block component
}


export interface TextBlockData {
  text: string;
}

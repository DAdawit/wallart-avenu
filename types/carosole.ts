import { PortableTextBlock } from "sanity";
export type CarosoleType = {
  _id: string;
  _createdAt: Date;
  image: string;
  content: PortableTextBlock;
};

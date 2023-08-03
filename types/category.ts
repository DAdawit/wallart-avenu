import { PortableTextBlock } from "sanity";
import { ImageDetail } from "./ImageDetail";

export type CategoryType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  coverImage: string;
};
export type CategoryDetailType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  images: ImageDetail[];
};

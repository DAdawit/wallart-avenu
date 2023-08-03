import { PortableTextBlock } from "sanity";

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

export type ImageDetail = {
  alt: string;
  name: string;
  size: string;
  url: string;
};

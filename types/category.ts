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
  _id?: string;
  _createdAt?: Date;
  name: string;
  alt: string;
  slug?: string;
  size: string;
  image: string;
};

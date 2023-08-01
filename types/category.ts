import { PortableTextBlock } from "sanity";

export type CategoryType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  coverImage: string;
};

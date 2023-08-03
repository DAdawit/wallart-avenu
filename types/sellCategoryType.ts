import { ImageDetail } from "./ImageDetail";
export type sellCategoriesType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  coverImage: string;
};

export type SellCategoryDetailType = {
  _id?: string;
  _createdAt?: Date;
  name: string;
  size: string;
  alt?: string;
  slug?: string;
  image: string;
  images?: ImageDetail[];
};

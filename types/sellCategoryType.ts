export type sellCategoriesType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  coverImage: string;
};

export type SellCategoryDetailType = {
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

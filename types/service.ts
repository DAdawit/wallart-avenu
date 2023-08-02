import { PortableTextBlock } from "sanity";

export type ServiceType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  icon: string;
  content: PortableTextBlock[];
};

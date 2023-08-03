import { getPage } from "@/sanity/sanity-utils";
import React from "react";
type Props = {
  params: { slug: string };
};
const page = async ({ params }: Props) => {
  const slug = params.slug;
  const page = await getPage(slug);
  return <div></div>;
};

export default page;

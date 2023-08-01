import { getPage } from "@/sanity/sanity-utils";
import React from "react";
type Props = {
  params: { slug: string };
};
const page = async ({ params }: Props) => {
  const slug = params.slug;
  const page = await getPage(slug);
  return (
    <div>
      <h1>{page.title}</h1>
    </div>
  );
};

export default page;

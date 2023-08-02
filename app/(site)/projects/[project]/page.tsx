import React from "react";
import { PortableText } from "@portabletext/react";
type Props = {
  params: { project: string };
};
const project = async ({ params }: Props) => {
  const slug = params.project;
  // const project = await getProject(slug);
  return (
    <div>
      <p>{/* <PortableText value={project.content} /> */}</p>
    </div>
  );
};

export default project;

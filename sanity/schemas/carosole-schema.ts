export const Carosole = {
  name: "carosole",
  title: "Carosole",
  type: "document",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

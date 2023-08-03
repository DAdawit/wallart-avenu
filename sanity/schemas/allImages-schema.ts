export const allImages = {
  name: "allImages",
  title: "AllImages",
  type: "document",
  fields: [
    {
      name: "name", // Changed the name to "categoryName"
      title: "Name",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }, // Updated the source to "categoryName"
    },
    {
      name: "size", // Changed the name to "categoryName"
      title: "Size",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
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

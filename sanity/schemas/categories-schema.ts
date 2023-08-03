export const Categories = {
  name: "category",
  title: "Categories",
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
      name: "coverImage",
      title: "CoverImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "size",
              title: "Size",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

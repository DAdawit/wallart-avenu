export const sellCategories = {
  name: "sellCategories",
  title: "SellCategories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
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

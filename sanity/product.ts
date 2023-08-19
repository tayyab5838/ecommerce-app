import { defineField, defineType } from "sanity";

export const product = defineField({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Prodcut Description",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Prodcut slug",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Prodcut Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
});
export const Category = defineType({
  name: "category",
  type: "document",
  title: "Product Category",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
    }),
  ],
});

import { defineField } from "sanity";

export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
  ],
};

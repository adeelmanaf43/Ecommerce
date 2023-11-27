import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Product Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category name",
      type: "string",
    }),
  ],
});

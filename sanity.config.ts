import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
export const config = defineConfig({
  projectId: "fxilrz4m",
  dataset: "production",
  title: "my personal website",
  apiVersion: "1",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: false,
});

// import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/client-config";
import { PageType } from "@/types/Page";
import { CategoryDetailType, CategoryType } from "@/types/category";
import {
  SellCategoryDetailType,
  sellCategoriesType,
} from "@/types/sellCategoryType";
import { ServiceType } from "@/types/service";
import { GalleryType } from "@/types/gallery";
import { AllImagesType } from "@/types/allImage";
import { CarosoleType } from "@/types/carosole";
// export async function getProjects(): Promise<Project[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type=="project"]{
//         _id,
//         _createdAt,
//         name,
//         "slug":slug.current,
//         "image":image.asset->url,
//         url,
//         content
//     }`
//   );
// }

// export async function getProject(slug: string): Promise<Project> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type=="project" && slug.current ==$slug][0]{
//         _id,
//         _createdAt,
//         name,
//         "slug":slug.current,
//         "image":image.asset->url,
//         url,
//         content
//     }`,
//     { slug }
//   );
// }
export async function getCarosoles(): Promise<CarosoleType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'carosole']{
        _id,
        _createdAt,
        "image":image.asset->url,
    }`
  );
}

export async function getPages(): Promise<PageType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page']{
    _id,
    _createdAt,
    title,
    "slug":slug.current,

  }`
  );
}

export async function getPage(slug: string): Promise<PageType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page' && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug":slug.current,
    content
    }`,
    { slug }
  );
}

export async function getCategories(): Promise<CategoryType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category']{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "coverImage":coverImage.asset->url,
    }`
  );
}

export async function getCategory(slug: string): Promise<CategoryDetailType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category' && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "images":images[]{
        alt,
        name,
        size,
        "image": asset->url
    }
    }`,
    { slug }
  );
}
export async function getSellCategories(): Promise<sellCategoriesType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'sellCategories']{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "coverImage":coverImage.asset->url,
    }`
  );
}
export async function getSellCategory(
  slug: string
): Promise<SellCategoryDetailType> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'sellCategories' && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "images":images[]{
        alt,
        name,
        size,
        "image": asset->url
    }
    }`,
    { slug }
  );
}

export async function getServices(): Promise<ServiceType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'services']{
    _id,
    _createdAt,
    name,
    "icon":icon.asset->url,
    content
  }`
  );
}

export async function getGallery(): Promise<GalleryType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'gallery']{
    _id,
    _createdAt,
    alt,
    name,
    "image":image.asset->url,
  }`
  );
}

export async function getAllImages(): Promise<AllImagesType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'allImages']{
    _id,
    _createdAt,
    slug,
    name,
    size,
    "image":image.asset->url,
  }`
  );
}

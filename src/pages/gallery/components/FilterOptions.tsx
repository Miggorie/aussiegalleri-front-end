import {
  Filters,
  SortOption,
  SubCategories,
} from "../../../interfaces/Interfaces";

export const sortOptions: SortOption[] = [
  {
    name: "Bokstavsordning",
    href: "http://localhost:8888/dogs",
    current: true,
  },
  { name: "Nyast i galleriet", href: "#", current: false },
  { name: "Äldst i galleriet", href: "#", current: false },
];
export const subCategories: SubCategories[] = [
  { name: "Alla hundar", href: "http://localhost:8888/dogs" },
  { name: "Vuxna hundar", href: "#" },
  { name: "Valpar", href: "#" },
];

export const ageOptions = [
  {
    label: "Vuxna hundar",
  },
  {
    label: "Valpar",
  },
];

export const genderOptions = [
  {
    label: "Tik",
  },
  {
    label: "Hane",
  },
];

export const colorOptions = [
  {
    label: "Svart",
  },
  {
    label: "Svart & vit",
  },
  {
    label: "Svart & tan",
  },
  {
    label: "Svart, vit & tan",
  },
  {
    label: "Bluemerle",
  },
  {
    label: "Bluemerle & vit",
  },
  {
    label: "Bluemerle & tan",
  },
  {
    label: "Bluemerle, vit & tan",
  },
  {
    label: "Röd",
  },
  {
    label: "Röd & vit",
  },
  {
    label: "Röd & tan",
  },
  {
    label: "Röd, vit & tan",
  },
  {
    label: "Redmerle",
  },
  {
    label: "Redmerle & vit",
  },
  {
    label: "Redmerle & tan",
  },
  {
    label: "Redmerle, vit & tan",
  },
];

export const originOptions = [
  {
    label: "Okänt",
  },
  {
    label: "Sverige",
  },
  {
    label: "Portugal",
  },
  {
    label: "Nederländerna",
  },
  {
    label: "Finland",
  },
  {
    label: "USA",
  },
  {
    label: "Frankrike",
  },
  {
    label: "Tjeckien",
  },
  {
    label: "Italien",
  },
  {
    label: "Tyskland",
  },
  {
    label: "Polen",
  },
  {
    label: "Norge",
  },
  {
    label: "Ungern",
  },
];

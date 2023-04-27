import {
  Filters,
  SortOption,
  SubCategories,
} from "../../../components/Interfaces";

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

export const genderOptions = [
  {
    label: "Hane",
  },
  {
    label: "Tik",
  },
];

export const colorOptions = [
  {
    label: "Färg1",
  },
  {
    label: "Färg2",
  },
];

export const originOptions = [
  {
    label: "Sverige",
  },
  {
    label: "Norge",
  },
];

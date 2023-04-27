import {
  Filters,
  SortOption,
  SubCategories,
} from "../../../components/Interfaces";

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

export const genderFilter: Filters = {
  id: "sex",
  name: "Kön",
  options: [
    { value: "tik", label: "Tik", checked: true },
    { value: "hane", label: "Hane", checked: false },
  ],
};

export const colorFilter: Filters = {
  id: "color",
  name: "Färg",
  options: [
    { value: "black-tre", label: "Svart trefärgad", checked: false },
    { value: "red-tri", label: "Röd trefärgad", checked: false },
    { value: "blue-tan", label: "Blue merle med tan", checked: false },
    { value: "brown", label: "Brown", checked: false },
    { value: "green", label: "Green", checked: false },
    { value: "purple", label: "Purple", checked: false },
  ],
};

export const originFilter: Filters = {
  id: "origin",
  name: "Ursprungsland",
  options: [
    { value: "sverige", label: "Sverige", checked: false },
    { value: "norge", label: "Norge", checked: false },
    { value: "finland", label: "Finland", checked: false },
    { value: "italien", label: "Italien", checked: false },
    { value: "usa", label: "USA", checked: false },
  ],
};

export const filters: Filters[] = [genderFilter, colorFilter, originFilter];

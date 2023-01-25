export const sortOptions = [
  {
    name: "Bokstavsordning",
    href: "href: http://localhost:8888/dogs",
    current: true,
  },
  { name: "Nyast i galleriet", href: "#", current: false },
  { name: "Äldst i galleriet", href: "#", current: false },
];
export const subCategories = [
  { name: "Alla hundar", href: "#" },
  { name: "Vuxna hundar", href: "#" },
  { name: "Valpar", href: "#" },
];
export const filters = [
  {
    id: "size",
    name: "size",
    options: [
      { value: "tik", label: "Tik", checked: true },
      { value: "hane", label: "Hane", checked: true },
    ],
  },

  {
    id: "color",
    name: "Färg",
    options: [
      { value: "allColors", label: "Alla färger", checked: true },
      { value: "Blackwhitetan", label: "Svart trefärgad", checked: false },
      { value: "beige", label: "Röd trefärgad", checked: false },
      { value: "blue", label: "Blue merle med tan", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Ursprungsland",
    options: [
      { value: "new-arrivals", label: "Alla länder", checked: true },
      { value: "new-arrivals", label: "Sverige", checked: false },
      { value: "sale", label: "Norge", checked: false },
      { value: "travel", label: "Finland", checked: false },
      { value: "organization", label: "Italien", checked: false },
      { value: "accessories", label: "USA", checked: false },
    ],
  },
];

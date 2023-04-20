import Test from "./FilterSidebar";
import {
  Filters,
  SortOption,
  SubCategories,
} from "../../../components/Interfaces";

function FilterCategories() {
  const sortOptions: SortOption[] = [
    {
      name: "Bokstavsordning",
      href: "http://localhost:8888/dogs",
      current: true,
    },
    { name: "Nyast i galleriet", href: "#", current: false },
    { name: "Äldst i galleriet", href: "#", current: false },
  ];
  const subCategories: SubCategories[] = [
    { name: "Alla hundar", href: "http://localhost:8888/dogs" },
    { name: "Vuxna hundar", href: "#" },
    { name: "Valpar", href: "#" },
  ];
  const filters: Filters[] = [
    {
      id: "sex",
      name: "Kön",
      options: [
        { value: "tik", label: "Tik", checked: true },
        { value: "hane", label: "Hane", checked: true },
      ],
    },
    {
      id: "color",
      name: "Färg",
      options: [
        { value: "Blackwhitetan", label: "Svart trefärgad", checked: true },
        { value: "beige", label: "Röd trefärgad", checked: true },
        { value: "blue", label: "Blue merle med tan", checked: true },
        { value: "brown", label: "Brown", checked: true },
        { value: "green", label: "Green", checked: true },
        { value: "purple", label: "Purple", checked: true },
      ],
    },
    {
      id: "category",
      name: "Ursprungsland",
      options: [
        { value: "new-arrivals", label: "Sverige", checked: true },
        { value: "sale", label: "Norge", checked: true },
        { value: "travel", label: "Finland", checked: true },
        { value: "organization", label: "Italien", checked: true },
        { value: "accessories", label: "USA", checked: true },
      ],
    },
  ];

  return (
    <div>
      <div>
        <Test
          sortOptions={sortOptions}
          subCategories={subCategories}
          filters={filters}
        />
      </div>
    </div>
  );
}

export default FilterCategories;

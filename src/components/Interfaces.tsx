export interface Dog {
  dogID?: string;
  name?: string;
  standLeft?: string;
  standRight?: string;
  headShot?: string;
  url?: string;
  date?: string;
  litterID?: string;
  isBitch?: string;
  place?: string;
  gender?: string;
  regnr?: string;
}

export interface Litter {
  sire: string;
  dam: string;
  born: string;
  litterID: string;
}

export interface FaqItem {
  id?: string;
  label?: string;
  content?: string;
}

export interface CountDogs {
  total_dogs: number;
  total_females: number;
  total_males: number;
  total_adults: number;
  total_pups: number;
}

export interface SearchBarProps {
  onChange: (search: string) => void;
}

export interface FilterBarProps {
  onChange: (filter: FilterProps[]) => void;
}

export interface FilterProps {
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
    checked: boolean;
  }[];
}

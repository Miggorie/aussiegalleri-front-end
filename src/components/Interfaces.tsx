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
  onSubmit: (search: string) => void;
  onChange: (search: string) => void;
}

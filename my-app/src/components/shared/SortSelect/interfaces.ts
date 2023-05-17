export type sortValues = "Name Dsc" | "Name Asc";

export type SortOption = {
  value: string;
  label: string;
};
export type sortOptions = Array<SortOption>;
export type SortSelectProps = {
  value: string;
  options: sortOptions;
  onChange: (value: string) => void;
};

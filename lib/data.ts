export const Countries = [
  "Turkey",
  "Egypt",
  "Dubai",
  "Saudi Arabia",
  "Malaysia",
  "Thailand",
  "India",
  "Vietnam",
  "China",
  "Indonesia",
  "Jordan"
] as const;

export type Country = typeof Countries[number];

export const VisaCountries = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Egypt",
  "Qatar",
  "Oman",
  "Jordan",
  "China"
] as const;

export type VisaCountry = typeof VisaCountries[number];

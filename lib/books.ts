export type CoverStyle =
  | "forest"
  | "navy"
  | "terra"
  | "olive"
  | "plum"
  | "slate"
  | "wine"
  | "cocoa";

export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  tag?: string;
  cover: CoverStyle;
};

export const COVER_STYLES: Record<
  CoverStyle,
  { from: string; to: string; accent: string }
> = {
  forest: { from: "#1d3a2f", to: "#2e5a47", accent: "#d9b56a" },
  navy: { from: "#20395e", to: "#33527f", accent: "#e6b75b" },
  terra: { from: "#b2542e", to: "#d87c49", accent: "#f8e8cf" },
  olive: { from: "#55673a", to: "#7b9152", accent: "#f1e2be" },
  plum: { from: "#452a52", to: "#6c4a7d", accent: "#efcba9" },
  slate: { from: "#26313c", to: "#3e4e5f", accent: "#f0c75a" },
  wine: { from: "#5c2333", to: "#8a3550", accent: "#f0d3c2" },
  cocoa: { from: "#49341f", to: "#6b5038", accent: "#ead9b4" },
};

export const categories = [
  { name: "Fiction", count: 3240, cover: "forest" as CoverStyle },
  { name: "Mystery & Thriller", count: 1890, cover: "wine" as CoverStyle },
  { name: "Sci-Fi & Fantasy", count: 1460, cover: "terra" as CoverStyle },
  { name: "Romance", count: 2120, cover: "plum" as CoverStyle },
  { name: "Biography & Memoir", count: 980, cover: "cocoa" as CoverStyle },
  { name: "Children's", count: 1540, cover: "olive" as CoverStyle },
];

export const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    rating: 4.8,
    reviews: 12840,
    price: 16.99,
    oldPrice: 21.99,
    tag: "Bestseller",
    cover: "forest",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Development",
    rating: 4.9,
    reviews: 48211,
    price: 13.49,
    cover: "slate",
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    rating: 4.7,
    reviews: 31052,
    price: 14.99,
    oldPrice: 17.99,
    tag: "Reader favorite",
    cover: "wine",
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    rating: 4.8,
    reviews: 22104,
    price: 18.99,
    tag: "New edition",
    cover: "terra",
  },
  {
    id: 5,
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    genre: "Fiction",
    rating: 4.6,
    reviews: 15208,
    price: 15.49,
    cover: "plum",
  },
  {
    id: 6,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    genre: "Romance",
    rating: 4.8,
    reviews: 18423,
    price: 12.99,
    oldPrice: 15.99,
    cover: "navy",
  },
  {
    id: 7,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    rating: 4.7,
    reviews: 26331,
    price: 11.99,
    tag: "Staff pick",
    cover: "cocoa",
  },
  {
    id: 8,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Fiction",
    rating: 4.7,
    reviews: 29456,
    price: 14.49,
    cover: "olive",
  },
];

export interface User {
  _id: string;
  name: string;
  country: string;
  country_wishlist: Array<String>;
  description: string;
  imageUrl: string;
  IsAvailable: boolean;
}

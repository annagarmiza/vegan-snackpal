export interface User {
  _id: string;
  name: string;
  age: number;
  user_country: string;
  country_img: string;
  user_about_me: string;
  //user_passions: Array<String>;
  user_snack_preference: Array<String>;
  //age_all:boolean;
  country_all: boolean;
  country_wishlist: Array<String>;
  pack_size: string;
  imageUrl: string;
  isAvailable: boolean;
}

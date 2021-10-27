import { User } from '../user.interface';

export class UserService {
  private users: Array<User> = [
    {
      _id: '123456',
      name: 'Kineret Cohen',
      age: 39,
      user_country: 'Israel',
      country_img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Israel_Flag_Round.svg/1200px-Israel_Flag_Round.svg.png',
      user_about_me: 'I worship Kitty',
      user_snack_preference: ['salty', 'sweet'],
      country_all: false,
      country_wishlist: ['Korea'],
      pack_size: 'small',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxla4U7w1xXHmY-ZdfNSk9LePoZ8l-t8odLQ&usqp=CAU',
      isAvailable: true,
    },
    {
      _id: '123456',
      name: 'Chung-Cha',
      age: 27,
      user_country: 'South-Korea',
      country_img:
        'https://cdn.countryflags.com/thumbs/south-korea/flag-round-250.png',
      user_about_me: 'I love parrots!🦜',
      user_snack_preference: ['salty', 'sweet', 'sour'],
      country_all: false,
      country_wishlist: ['Israel'],
      pack_size: 'small',
      imageUrl:
        'https://media.istockphoto.com/photos/young-korean-woman-portrayed-in-seoul-south-korea-picture-id543076612?k=20&m=543076612&s=170667a&w=0&h=nvSLlLoxvR63Nrqx6hE1RqRcxrkPjxuyWBJSpBxR2uI=',
      isAvailable: true,
    },
  ];

  getUsers() {
    return this.users.slice();
  }
}

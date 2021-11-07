import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './app/user.interface';

export class FireBaseService {
  users!: any[];

  //   constructor(db: AngularFireDatabase) {
  //     db.list('/users')
  //       .valueChanges()
  //       .subscribe((users) => {
  //         this.users = users;
  //         console.log(this.users);
  //       });
  //   }
}

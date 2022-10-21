import Entity from './Entity';
import Role from './Role';

interface User extends Entity {
  email: string;
  emailVerifiedAt: Date;
  roles: Role[];
}

export default User;

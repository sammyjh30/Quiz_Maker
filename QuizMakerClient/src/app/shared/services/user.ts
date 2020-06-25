export interface Roles {
  normal?: boolean;
  moderator?: boolean;
  admin?: boolean;
}

export interface User {
  uid: string;
  email: string;
  roles: Roles;
}

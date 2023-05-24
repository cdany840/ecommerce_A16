export interface User {
  _id:      string;
  email:    string;
  name:     string;
  last_name: string;
  phone:    string;
  avatar:   string[];
  isActive: boolean;
  roles:    string[];
}

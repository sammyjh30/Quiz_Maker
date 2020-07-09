import { User } from './user';
import { TeamMember } from './teammember';

export class TeamUser implements User, TeamMember  {
  teamId?: number;
  userId?: string;
  captain?: boolean;
  email?: string;
  name?: string;
  surname?: string;
}

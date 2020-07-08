import { User } from './user';
import { TeamMember } from './teammember';


export class TeamUser implements User, TeamMember  {
  teamId: number;
  captain: boolean;
  userId: string;
  email: string;
  name: string;
  surname: string;
  invitation: boolean;
}

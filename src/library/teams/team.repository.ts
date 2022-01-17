import { Repository, EntityRepository } from 'typeorm';
import { Team } from '../entities/team.entity';
import { CreateTeamDTO } from '../dto/create-team.dto';

@EntityRepository(Team)
export class TeamRepository extends Repository<Team> {
  public async createTeam(createTeamtDTO: CreateTeamDTO): Promise<Team> {
    const { name, metadata } = createTeamtDTO;

    const team = new Team();
    team.name = name;
    team.metadata = metadata;

    await team.save();
    return team;
  }

  public async editTeam(
    createTeamtDTO: CreateTeamDTO,
    editedTeam: Team,
  ): Promise<Team> {
    const { name, metadata } = createTeamtDTO;

    editedTeam.name = name;
    editedTeam.metadata = metadata;
    await editedTeam.save();

    return editedTeam;
  }
}

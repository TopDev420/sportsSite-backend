import { Repository, EntityRepository } from 'typeorm';
import { Team } from '../entities/team.entity';
import { CreateTeamDTO } from '../dto/create-team.dto';

@EntityRepository(Team)
export class TeamRepository extends Repository<Team> {
  public async createTeam(createTeamDTO: CreateTeamDTO): Promise<Team> {
    const { name, metadata } = createTeamDTO;

    const team = new Team();
    team.name = name;
    team.metadata = metadata;

    await team.save();
    return team;
  }

  public async editTeam(
    createTeamDTO: CreateTeamDTO,
    editedTeam: Team,
  ): Promise<Team> {
    const { name, metadata } = createTeamDTO;

    editedTeam.name = name;
    editedTeam.metadata = metadata;
    await editedTeam.save();

    return editedTeam;
  }
}

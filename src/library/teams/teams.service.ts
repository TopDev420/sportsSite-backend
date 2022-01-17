import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Team } from '../entities/team.entity';
import { CreateTeamDTO } from '../dto/create-team.dto';
import { TeamRepository } from './team.repository';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(TeamRepository)
    private teamRepository: TeamRepository,
  ) {}

  public async createTeam(createTeamDTO: CreateTeamDTO): Promise<Team> {
    return await this.teamRepository.createTeam(createTeamDTO);
  }

  public async getTeams(): Promise<Team[]> {
    return await this.teamRepository.find();
  }

  public async getTeam(teamId: number): Promise<Team> {
    const foundTeam = await this.teamRepository.findOne(teamId);
    if (!foundTeam) throw new NotFoundException('Team noe found');
    return foundTeam;
  }

  public async editTeam(
    teamId: number,
    createTeamDTO: CreateTeamDTO,
  ): Promise<Team> {
    const editedTeam = await this.teamRepository.findOne(teamId);
    if (!editedTeam) throw new NotFoundException('Team not found');
    return this.teamRepository.editTeam(createTeamDTO, editedTeam);
  }

  public async deleteTeam(teamId: number): Promise<void> {
    await this.teamRepository.delete(teamId);
  }
}

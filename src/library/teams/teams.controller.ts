import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDTO } from '../dto/create-team.dto';
import { Team } from '../entities/team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Post('create')
  public async createTeam(@Body() createTeamDTO: CreateTeamDTO): Promise<Team> {
    const team = await this.teamsService.createTeam(createTeamDTO);
    return team;
  }

  @Get('all')
  public async getCategories(): Promise<Team[]> {
    const teams = await this.teamsService.getTeams();
    return teams;
  }

  @Get('/:teamId')
  public async getTeam(@Param('teamId') teamId: number) {
    const team = await this.teamsService.getTeam(teamId);
    return team;
  }

  @Patch('/edit/:teamId')
  public async editProduct(
    @Body() createTeamDTO: CreateTeamDTO,
    @Param('teamId') teamId: number,
  ): Promise<Team> {
    const team = await this.teamsService.editTeam(teamId, createTeamDTO);
    return team;
  }

  @Delete('/delete/:teamId')
  public async deleteTeam(@Param('teamId') teamId: number) {
    const deleteTeam = await this.teamsService.deleteTeam(teamId);
    return deleteTeam;
  }
}

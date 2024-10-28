import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import {
  GetAccessToRouteGuard,
  IsAdminGuard,
} from 'middlewares/authorization/auth.middleware';
import { Request } from 'express';
interface IGetUserCampaignRequest extends Request {
  user?: {
    id: string;
    full_name: string;
    isAdmin?: boolean;
  };
}
@Controller('campaigns')
@UseGuards(GetAccessToRouteGuard)
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  async getAllCampaigns() {
    return this.campaignService.getAll();
  }

  @Post('create')
  @UseGuards(IsAdminGuard)
  async createCampaign(
    @Req() req: IGetUserCampaignRequest,
    @Body() createCampaignDto: CreateCampaignDto,
  ) {
    return this.campaignService.create(createCampaignDto);
  }

  @Put('update/:id')
  @UseGuards(IsAdminGuard)
  async updateCampaign(
    @Req() req: IGetUserCampaignRequest,
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ) {
    return this.campaignService.update(id, updateCampaignDto);
  }

  @Delete('delete/:id')
  @UseGuards(IsAdminGuard)
  async deleteCampaign(
    @Req() req: IGetUserCampaignRequest,
    @Param('id') id: string,
  ) {
    return this.campaignService.delete(id);
  }
  @Get('/:id')
  @UseGuards(IsAdminGuard)
  async getCampaignDetail(
    @Param('id') id: string,
  ) {
    return this.campaignService.getSingleCampaign(id);
  }
}

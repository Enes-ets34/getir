import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { GetAccessToRouteGuard } from 'middlewares/authorization/auth.middleware';
import { IsAdminGuard } from 'middlewares/authorization/auth.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignSchema } from './schemas/campaign.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Campaign', schema: CampaignSchema }]),
  ],
  controllers: [CampaignController],
  providers: [CampaignService, GetAccessToRouteGuard, IsAdminGuard],
})
export class CampaignModule {}

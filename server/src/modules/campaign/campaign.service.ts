import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from './schemas/campaign.schema';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
  ) {}

  async getAll(): Promise<{ status: string; data: Campaign[] }> {
    const campaigns = await this.campaignModel.find().exec();
    return {
      status: 'success',
      data: campaigns,
    };
  }

  async create(
    createCampaignDto: CreateCampaignDto,
  ): Promise<{ status: string; data: Campaign }> {
    const newCampaign = new this.campaignModel(createCampaignDto);
    const savedCampaign = await newCampaign.save();
    return {
      status: 'success',
      data: savedCampaign,
    };
  }

  async update(
    id: string,
    updateCampaignDto: UpdateCampaignDto,
  ): Promise<{ status: string; data: Campaign }> {
    const updatedCampaign = await this.campaignModel.findByIdAndUpdate(
      id,
      updateCampaignDto,
      { new: true },
    );

    if (!updatedCampaign) {
      throw new NotFoundException('Kampanya bulunamadı');
    }

    return {
      status: 'success',
      data: updatedCampaign,
    };
  }

  async delete(id: string): Promise<{ status: string; message: string }> {
    const deletedCampaign = await this.campaignModel.findByIdAndDelete(id);
    if (!deletedCampaign) {
      throw new NotFoundException('Kampanya bulunamadı');
    }
    return {
      status: 'success',
      message: `${deletedCampaign?.title} Kampanya başarıyla silindi...`,
    };
  }
  async getSingleCampaign(
    id: string,
  ): Promise<{ status: string; data: Campaign }> {
    const campaign = await this.campaignModel.findById(id);
    if (!campaign) {
      throw new NotFoundException('Kampanya bulunamadı');
    }
    return {
      status: 'success',
      data: campaign,
    };
  }
}

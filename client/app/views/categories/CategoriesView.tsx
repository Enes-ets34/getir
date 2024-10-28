import CampaignBanner from '@/components/campaign-banner/CampaignBanner';
import { CategoriesViewProps } from './categoriesView.types';


export default function CategoriesView({ campaigns }: CategoriesViewProps) {
  return (
    <div>
      <CampaignBanner campaigns={campaigns} />
      Categories View, products, cart
    </div>
  );
}

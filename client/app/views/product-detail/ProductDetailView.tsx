import Button from '@/components/button/Button';
import {useParams} from 'next/navigation';

export default function ProductDetailView() {
  const params = useParams();
  const {id} = params;
 
  return (
    <div>
      ProductDetailView + {id} <br />
      <Button onClick={()=>{}} text="handleOpenModal" />
    </div>
  );
}

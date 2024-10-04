import {useParams} from 'next/navigation';

export default function ProductDetailView() {
  const params = useParams();
  const {id} = params;
  return <div>ProductDetailView + {id}</div>;
}

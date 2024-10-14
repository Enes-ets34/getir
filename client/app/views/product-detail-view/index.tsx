import Button from '@/components/button/Button';
import {useModalStore} from '@/store/modal';
import {useParams} from 'next/navigation';

export default function ProductDetailView() {
  const params = useParams();
  const {id} = params;
  const {openModal, setContent, setTitle} = useModalStore();
  const handleOpenModal = () => {
    setContent(<div>Modal content</div>);
    setTitle('Giriş yap veya kayıt ol');
    openModal();
  };
  return (
    <div>
      ProductDetailView + {id} <br />
      <Button onClick={handleOpenModal} text="handleOpenModal" />
    </div>
  );
}

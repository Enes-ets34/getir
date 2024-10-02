"use client";
import Button from '@/app/components/button/Button';
import {useParams} from 'next/navigation';

export default function Product() {
  const params = useParams();
  const id = params?.id;
  return <div>product {id}
  <Button text={'deneme'} onClick={()=>alert()} variant='secondary'/>
  </div>;
}

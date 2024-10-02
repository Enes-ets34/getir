'use client';
import Button from '@/app/components/button/Button';

export default function Home() {
  const onClick = (): void => {
    console.log('hello');
  };
  return (
    <div>
      home
      <Button variant="primary" text="deneme" onClick={onClick} />
    </div>
  );
}

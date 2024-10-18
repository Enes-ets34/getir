'use client';
import React, {useState} from 'react';
import PhoneNumberInput from '../phone-number-input/Input';
import Input from '../input/Input';
import Checkbox from '../header/_components/checkbox/Checkbox';
import Button from '../button/Button';

const Register: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [phone, setPhone] = useState<string | null>(null);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="flex flex-col gap-4">
      <PhoneNumberInput
        onChange={e => {
          setPhone(e.target.value);
        }}
        value={phone || ''}
        className="w-full"
        errorText={phone ? '' : 'Lütfen telefon numaranı gir.'}
      />
      <Input type="text" label="Ad soyad" />
      <Input
        type="email"
        label="E-Posta"
        // errorText="Lütfen E-Postanı gir."
      />
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
        description="Getir’in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum."
      />
      <small className="text-grayMid">
        Kişisel verilere dair Aydınlatma Metni için{' '}
        <span className="underline hover:cursor-pointer text-primary">
          tıkla
        </span>
        . Üye olmakla,{' '}
        <span className="underline hover:cursor-pointer text-primary">
          Kullanım koşulları
        </span>{' '}
        hükümlerini kabul etmektesin
      </small>
      <Button text='Kayıt Ol' color='secondary' onClick={()=>{}} className='mt-8'/>
    </div>
  );
};

export default Register;

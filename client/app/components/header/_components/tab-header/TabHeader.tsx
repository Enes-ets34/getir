import React from 'react';
import {TabHeaderProps} from './tab-header.types';
import {tabHeaderStyles} from './tab-header.styles';
import Icon from '@/components/icon/Icon';
import Input from '@/components/input/Input';

const TabHeader: React.FC<TabHeaderProps> = ({}) => {
  return (
    <div className={tabHeaderStyles.wrapperStyle}>
      <div className={tabHeaderStyles.container}>
        <Icon className='hidden sm:block' source={'getir'} size={{width: 60, height: 27}} />
        <div className={tabHeaderStyles.inputWrapperStyle}>
          <Input
            placeholder="Ürün ara"
            type={'text'}
            icon={'search'}
            className={tabHeaderStyles.inputStyle}
          />
          <div className="hidden sm:flex bg-white justify-between items-center p-2 gap-2 rounded-e-lg">
            <Icon source={'house'} size={{width: 22, height: 16}} />
            <p className="text-grayMid font-bold">Ev</p>
            <Icon className='' source={'chevron'} size={{width: 12, height: 12}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabHeader;

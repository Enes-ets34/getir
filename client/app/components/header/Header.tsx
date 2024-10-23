import React from 'react';
import Navigation from './_components/navigation';
import Actions from './_components/actions';
import {headerStyles} from './header.styles';
import TabHeader from './_components/tab-header/TabHeader';

const Header: React.FC = ({}) => {
  return (
    <header className={headerStyles.wrapperStyle}>
      <div className={headerStyles.containerStyle}>
        {/* navigation */}
        <Navigation />
        {/* Actions */}
        <Actions />
      </div>
      {/* TabHeader */}
      <TabHeader />
    </header>
  );
};

export default Header;

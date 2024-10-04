'use client';
import { navigationsStyles } from './navigations.styles';
import NavItem from './NavItem';
import {icons} from '@/theme/Icons';

interface NavItemType {
  id: number;
  icon: icons;
  iconSize: {
    width: number;
    height: number;
  };
  href: string;
}

const Navigation: React.FC = () => {
  const navItems: NavItemType[] = [
    {
      id: 1,
      icon: 'getir',
      iconSize: {
        width: 35,
        height: 16,
      },
      href: '/',
    },
    {
      id: 2,
      icon: 'getir_yemek',
      iconSize: {
        width: 87,
        height: 16,
      },
      href: '/',
    },
    {
      id: 3,
      icon: 'getir_buyuk',
      iconSize: {
        width: 81,
        height: 16,
      },
      href: '/',
    },
    {
      id: 4,
      icon: 'getir_su',
      iconSize: {
        width: 53,
        height: 16,
      },
      href: '/',
    },
    {
      id: 5,
      icon: 'getir_carsi',
      iconSize: {
        width: 72,
        height: 16,
      },
      href: '/',
    },
  ];

  return (
    <ul className={navigationsStyles.navigtaionItemList}>
      {navItems &&
        navItems.map((navItem, index) => (
          <NavItem
            selected={index === 0}
            key={navItem.id}
            icon={navItem.icon}
            iconSize={navItem.iconSize}
          />
        ))}
    </ul>
  );
};

export default Navigation;

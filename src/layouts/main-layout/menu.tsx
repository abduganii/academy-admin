import React, { useState } from 'react';
import { FileTextOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <FileTextOutlined />,
    label: 'Ресурсы',
    children: [
      { 
        key: '/books',
        label: 'Книги',
        children: [
          { key: '/books', label: 'Книги' },
          { key: '/authors', label: 'Авторы' },
          { key: '/tags', label: 'Теги' },
          { key: '/publishing-house', label: 'Издательство' },
          { key: '/translators', label: 'Переводчики' },
        ]
      },
      { key: '/literature', label: 'Литература' },
      { key: '/videos', label: 'Видеоматериалы' },
      { key: '/articles', label: 'Статьи' },
      { key: '/map', label: 'Карта' },
      { key: '/analytics', label: 'Аналитика' },
    ],
  },
  {
    key: '2',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      { key: '/option1', label: 'Option 1' },
      { key: '/option2', label: 'Option 2' },
      { key: '/option3', label: 'Option 3' },
    ],
  },
];

const SiteBar: React.FC = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['1']);
  const navigate = useNavigate();

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    if (currentOpenKey !== undefined) {
      setStateOpenKeys(openKeys);
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <div className='w-full h-screen max-w-[312px]'>
      <div className='w-full border-b p-6 h-[68px]'>
        logo
      </div>
      <Menu
        mode="inline"
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        onClick={onClick} // Add onClick handler
        className='w-full h-full'
        items={items}
      />
    </div>
  );
};

export default SiteBar;

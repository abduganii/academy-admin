import React, { useState } from 'react';
import { BarChartOutlined, DatabaseOutlined, FileTextOutlined, MailOutlined, MessageOutlined, NotificationOutlined, UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Store } from "../../utils/storage";
import { useSelector } from "react-redux";
type MenuItem = Required<MenuProps>['items'][number];

const Adminitems: MenuItem[] = [
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
          { key: '/categories', label: 'Категории' },
          { key: '/tags', label: 'Теги' },
          { key: '/publishers', label: 'Издательство' },
          { key: '/translators', label: 'Переводчики' },
        ]
      },
      // { key: '/literature', label: 'Литература' },
      { 
        key: '/videos', label: 'Видеоматериалы',
        children: [
          { key: '/videos', label: 'Видеоматериалы'},
          { key: '/tags', label: 'Теги' },
         ]
       },
      {
         key: '/articles', label: 'Статьи',
         children: [
          { key: '/articles', label: 'Статьи'},
          { key: '/authors', label: 'Авторы' },
        
         ]
       },
      { key: '/maps', label: 'Карта' },
      { key: '/analytics', label: 'Аналитика' },
      { 
        key: '/courses', label: 'Курсы',
        children: [
          { key: '/courses?type=local', label: 'Наши курсы'},
          { key: '/courses?type=virtual', label: 'Виртуальная академия' },
          { key: '/courses?type=international', label: 'Международные курсы' },
         ]
       },
      // /courses
    ],
  },
  {
    key: '2',
    icon: <BarChartOutlined />,
    label: 'Статистика',
    children: [
      { key: '/statistics-users', label: 'Пользователи' },
      { key: '/statistics-visits', label: 'Посещения' },
      { key: '/statistics-view', label: 'Просмотр' },
    ],
  },
  {
    key: '/users',
    icon: <UsergroupAddOutlined />,
    label: 'Пользователи',
   
  },
  
   {
    key: '3',
    icon: <NotificationOutlined />,
    label: 'Уведомления',
    children: [
      { key: '/', label: 'Настройки уведомле..' },
      { key: '/contact-us-messages', label: 'Связаться с нами' },
      { key: '/user-messages', label: 'Сообщения' },
      { key: '/notifications', label: 'Отправить уведомление' },
    ],
  },
  
  {
    key: '/action_history',
    icon: <DatabaseOutlined />,
    label: 'Журнал-logo',
  },
  {
    key: '/news',
    icon: <UnorderedListOutlined /> ,
    label: 'Новости',
  },
  {
    key: '/reviews',
    icon:<MessageOutlined />,
    label: 'reviews',
  },
  {
    key: '/cooperations',
    icon:<UsergroupAddOutlined />,
    label: 'Сотрудничество',
  },
];
const Manegeritems: MenuItem[] = [
  {
    key: '1',
    icon: <FileTextOutlined />,
    label: 'Ресурсы',
    children: [
      { 
        key: '/books',
        label: 'Книги',
       
      },
      {
        key: '/videos', label: 'Видеоматериалы',
      },
      // { key: '/literature', label: 'Литература' },
     
      { key: '/articles', label: 'Статьи'},
      { key: '/maps', label: 'Карта' },
      { key: '/analytics', label: 'Аналитика' },
    ],
  },
  // {
  //   key: '2',
  //   icon: <MailOutlined />,
  //   label: 'Статистика',
  //   children: [
  //     { key: '/news', label: 'Пользователи' },
  //     { key: '/tags', label: 'Посещения' },
  //     { key: '/tags', label: 'Просмотр' },
  //   ],
  // },
  {
    key: '/users',
    icon: <MailOutlined />,
    label: 'Пользователи',
   
  },
  
   {
    key: '3',
    icon: <MailOutlined />,
    label: 'Уведомления',
    children: [
      { key: '/contact-us-messages', label: 'Связаться с нами' },
      { key: '/user-messages', label: 'Сообщения' },
      { key: '/notifications', label: 'Отправить уведомление' },
    ],
  },
  {
    key: '/news',
    icon: <MailOutlined />,
    label: 'Новости',
  },
  {
    key: '/reviews',
    icon: <MailOutlined />,
    label: 'reviews',
  },
  {
    key: '/cooperations',
    icon: <MailOutlined />,
    label: 'Сотрудничество',
  },
];


const SiteBar: React.FC = () => {
  const role = useSelector((state: any) => state.role?.Role) || Store.getRole();
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
      <div className='w-full border-b px-[26px] py-[12px] h-[68px]'>
        <img src='/logo.svg'/>
      </div>
      <Menu
        mode="inline"
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        onClick={onClick} // Add onClick handler
        className='w-full h-full'
        items={role =="admin" ? Adminitems : Manegeritems}
      />
    </div>
  );
};

export default SiteBar;

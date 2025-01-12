import React, { useState } from 'react';
import { BarChartOutlined, DatabaseOutlined, FileTextOutlined, MailOutlined, MessageOutlined, NotificationOutlined, UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Store } from "../../utils/storage";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
type MenuItem = Required<MenuProps>['items'][number];


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
  const {t} = useTranslation()
  const Adminitems: MenuItem[] = [
    {
      key: '1',
      icon: <FileTextOutlined />,
      label: 'Ресурсы',
      children: [
        { 
          key: '/books',
          label: t('books'),
          children: [
            { key: '/books', label: t('books') },
            { key: '/authors?type=book', label: t('authors') },
            { key: '/categories', label:  t('categories')},
            { key: '/tags', label: t('tags') },
            { key: '/publishers', label:  t('publishers') },
            { key: '/translators', label:  t('translators') },
          ]
        },
        // { key: '/literature', label: 'Литература' },
        { 
          key: '/videos', label: t('videos'),
         },
        {
           key: '/articles', label:t('articles'),
           children: [
            { key: '/articles', label: t('articles')},
            { key: '/authors?type=article', label: t('authors') },
          
           ]
         },
        { key: '/maps', label: t('maps') },
        { key: '/analytics', label: t('analytics')},
        { 
          key: '/courses', label: t('courses'),
          children: [
            { key: '/courses?type=local', label: t('our-courses')},
            { key: '/courses?type=virtual', label: t('virtual-academy') },
            { key: '/courses?type=international', label: t('international-courses')},
           ]
         },
        // /courses
      ],
    },
    {
      key: '2',
      icon: <BarChartOutlined />,
      label:  t('statistics'),
      children: [
        { key: '/statistics-users', label: t('users') },
        { key: '/statistics-visits', label: t('daily') },
        { key: '/statistics-view', label: t('views') },
      ],
    },
    {
      key: '/users' ,
      icon: <UsergroupAddOutlined />,
      label:  t('users'),
     
    },
    
     {
      key: '3',
      icon: <NotificationOutlined />,
      label: t('notification'),
      children: [
        { key: '/', label: t('set-notification')},
        { key: '/contact-us-messages', label: t('contact-us-messages') },
        { key: '/user-messages', label: t('messages') },
        { key: '/notifications', label: t('send-notifications') },
      ],
    },
    
    {
      key: '/action_history',
      icon: <DatabaseOutlined />,
      label: t('action_history'),
    },
    {
      key: '/news',
      icon: <UnorderedListOutlined /> ,
      label: t('news'),
    },
    {
      key: '/reviews',
      icon:<MessageOutlined />,
      label: t('reviews'),
    },
    {
      key: '/cooperations',
      icon:<UsergroupAddOutlined />,
      label: t('cooperations'),
    },
  ];
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

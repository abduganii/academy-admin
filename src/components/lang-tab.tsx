import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Store } from '../utils/storage';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../redux/lang';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { changeDirty } from '../redux/dirty';


const LangTab: any = ({className}:any) =>{
  const dispatch: any = useDispatch();
  const {t} = useTranslation()
  const dirty = useSelector((state:any) => state.dirty?.dirty); 
  const [activeKey,setActive] = useState(Store.getLang() || 'uz')
  const items: TabsProps['items'] = [
    {
      key: 'uz',
      label: t('uz'),
    },
    {
      key: 'cr',
      label: t('cr'),
    },
    {
      key: 'ru',
      label: t('ru'),
    },
    {
      key: 'en',
      label: t('en'),
    },
  ];

  const handleTabChange = (key: string) => {
    if (dirty) {
      const shouldProceed = window.confirm(
        "You have unsaved changes. Are you sure you want to leave without saving?"
      );
      
      if (shouldProceed) {
        dispatch(changeLang(key));
        dispatch(changeDirty(false))
        Store.setLanguage(key);
        setActive(key);
      }
     
    } else {
      dispatch(changeLang(key));
      Store.setLanguage(key);
      setActive(key)
    }
  };
  return(
    <Tabs className={`${className && className} inline-block`} activeKey={activeKey} defaultActiveKey={Store.getLang() || 'uz'} items={items} 
    onChange={handleTabChange}
    />
  )
}

export default LangTab;
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Store } from '../utils/storage';
import { useDispatch } from 'react-redux';
import { changeLang } from '../redux/lang';
import { useTranslation } from 'react-i18next';


const LangTab: any = ({className}:any) =>{
  const dispatch: any = useDispatch();
  const {t} = useTranslation()
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
  return(
    <Tabs className={`${className && className} inline-block`} defaultActiveKey={Store.getLang() || 'uz'} items={items} onChange={(key:string)=> {
      dispatch(changeLang(key))
      Store.setLanguage(key)
    }} 
    />
  )
}

export default LangTab;
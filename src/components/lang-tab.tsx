import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Store } from '../utils/storage';
import { useDispatch } from 'react-redux';
import { changeLang } from '../redux/lang';



const items: TabsProps['items'] = [
  {
    key: 'uz',
    label: 'uz',
  },
  {
    key: 'cr',
    label: 'cr',
  },
  {
    key: 'ru',
    label: 'ru',
  },
  {
    key: 'en',
    label: 'en',
  },
];

const LangTab: any = ({className}:any) =>{
  const dispatch: any = useDispatch();
  return(
    <Tabs className={`${className && className} inline-block`} defaultActiveKey={Store.getLang() || 'uz'} items={items} onChange={(key:string)=> {
      dispatch(changeLang(key))
      Store.setLanguage(key)
    }} 
    />
  )
}

export default LangTab;
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';



const items: TabsProps['items'] = [
  {
    key: 'uz',
    label: 'uz',
  },
  {
    key: 'uz-cur',
    label: 'uz-cur',
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

const LangTab: any = ({setLang,lang}:any) => <Tabs className=' inline-block' defaultActiveKey={lang || 'uz'} items={items} onChange={(key:string)=> setLang(key)} />;

export default LangTab;
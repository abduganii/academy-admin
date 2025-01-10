import { Avatar, Breadcrumb } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Lang from '../../components/lang';
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate()
    const {t} = useTranslation()
    const pathnames = location.pathname.split('/').filter((x) => x);
    const items = pathnames.map((name, index) => {
        const url = `/${pathnames.slice(0, index + 1).join('/')}`;
        return {
            title: index < pathnames.length - 1 ? (
                <Link to={url}>{t(name.replace('%20',' '))}</Link>
            ) : (
                t(name.replace('%20',' '))
            ),
        };
    });
  return (
<div className='w-full border-b border-collapse  flex gap-4 items-center justify-between p-6 bg-white h-[68px]'>
       <Breadcrumb
            items={items}
        />
        <Lang/>
          <Avatar
              onClick={()=>navigate('/profile')}
            className="cursor-pointer"
            style={{
                backgroundColor: '#87d068',
            }}
            icon={<UserOutlined />}
            />
    </div>
  )
}

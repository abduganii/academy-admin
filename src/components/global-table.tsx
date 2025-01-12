import { Button, Modal, Table } from 'antd';
import { DeleteOutlined,FormOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';
import { DeleteDataId, GetAllData } from '../service/global';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { queryClient } from '../service/api';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface Iprops {
    columns: any;
    url?:string;
    api:string;
    filter?: any;
    openMadal?:any;
    relations?:any;
    isUpdate?:any;
    isAction?:any;
    handleRowClick?:any;
    onCooperationsChange?:any;
    params?:any
}
const GlobalTitle = ({columns,api,onCooperationsChange,url,handleRowClick,params,openMadal,filter,isAction=true,isUpdate=true}: Iprops) => {
    const navigate = useNavigate()
    const {t} = useTranslation()
    const [page,setPage] = useState(1)
    const [pageSize,setPageSize] = useState(10)
    const [open,setOpen] = useState<number |string | boolean>()
    const [loadingDelete,setLoadingDelete] = useState<boolean>()
    const language = useSelector((state:any) => state.lang?.lang); 
    const { isLoading, data } = useQuery(
        [api,page,pageSize,language, ...Object.values(filter)],
        () =>
          GetAllData(api,{
            page:page,
            pageSize:pageSize,
            ...filter,
          })
      );
      const Actioncolumns = {
        title: t('action'),
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (e: any) => <div className='flex gap-[6px]'>
          {
            onCooperationsChange? 
            <Button className='w-[30px] aspect-square flex items-center justify-center' onClick={()=>onCooperationsChange(e?.id)} type="primary" danger>
             <FormOutlined />
            </Button>:
            <Button className='w-[30px] aspect-square flex items-center justify-center' onClick={()=>setOpen(e?.id)} type="primary" danger>
            <DeleteOutlined />
           </Button>
          }
            
            {isUpdate?   <Button className='w-[30px] max-w-[30px] aspect-square flex items-center justify-center' onClick={openMadal? ()=> openMadal(e?.id): ()=>navigate(`/${url}/${e?.id}${ params ?params:''}`)} type="primary" block>
                <FormOutlined />
            </Button>:''}
        </div>,
      }

      const DeleteDate = async () => {
        setLoadingDelete(true)
        await DeleteDataId(api, String(open)).then(() => {
          toast.success("deleted");
          setLoadingDelete(false)
          setOpen(false)
          queryClient.invalidateQueries([api]);
        });
      }
      
  return (
    <>
    <Modal
        className='w-full max-w-[438px]'
            footer={
                <div className='flex w-full gap-[18px]'>
                     <Button className='w-full' type="primary" danger loading={loadingDelete} onClick={DeleteDate}>
                     {t('delete')}
                    </Button>
                    <Button className='w-full text-[#404040] bg-[#E1E1E1]' onClick={() => setOpen(false)} >
                    {t('cancel')}
                    </Button>
                </div>
            }
            open={Boolean(open)}
            onCancel={() => setOpen(false)}
        >
            <div className='m-auto flex items-center justify-center w-[73px] rounded-full aspect-square bg-red-200'>
                <DeleteOutlined className='text-[25px] text-red-500'  />
            </div>
            <p className='text-center text-[#232323] font-semibold text-[20px] leading-[32px] mb-[28px] mt-[9px]'>Уверены, что хотите удалить?</p>
            
      </Modal>
        <Table
        className={handleRowClick? 'cursor-pointer local-hight':""}
        columns={isAction ? [...columns, Actioncolumns]:columns}
        dataSource={data?.data}
        loading={isLoading}
        onRow={handleRowClick? (record) => ({
          onClick: () => handleRowClick(record),
        }):undefined}  
        onChange={(e:any)=>{
           setPage( e.current)
           setPageSize( e.pageSize)
        }}
        pagination={
            { 
                total:data?.pagination?.total,
                current:page,
                pageSize: pageSize 
            }
        }
        />
    </>
  );
};

export default GlobalTitle;
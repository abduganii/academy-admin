import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function SubmitBtn({loader}:any) {
  const {t}= useTranslation()
  const navigate = useNavigate()
  return (
    <div className="flex justify-end items-center gap-4 p-4 w-full bg-white">
     <Button  onClick={()=>navigate(-1)} type="primary" size="large" variant="filled" color="danger" >{t('cancel')}</Button>
     <Button loading={loader} type="primary" size="large" htmlType="submit" >{t('save')}</Button>
</div>
  )
}

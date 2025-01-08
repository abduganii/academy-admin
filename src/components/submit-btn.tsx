import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

export default function SubmitBtn({loader}:any) {
  const {t}= useTranslation()
  return (
    <div className="flex justify-end items-center gap-4 p-4 w-full bg-white">
     <Button  type="primary" size="large" variant="filled" color="danger" >{t('delete')}</Button>
     <Button loading={loader} type="primary" size="large" htmlType="submit" >{t('save')}</Button>
</div>
  )
}

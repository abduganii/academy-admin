import { Button } from 'antd'

export default function SubmitBtn() {
  return (
    <div className="flex justify-end items-center gap-4 p-4 w-full bg-white">
     <Button  type="primary" size="large" variant="filled" color="danger" >Удалить</Button>
     <Button type="primary" size="large" htmlType="submit" >Сохранить</Button>
</div>
  )
}

import {  Modal } from 'antd'

interface IPops {
    children:any,
    onClose:any,
    title:string,
    open :boolean
}
export default function ActionMadal({children,title,open,onClose}:IPops) {
   
  return (
    <Modal
        className='w-full min-h-[400px] max-w-[483px]'
            title={title}
            onCancel={onClose}
            open={open}
        >
          {children}
      </Modal>
  )
}

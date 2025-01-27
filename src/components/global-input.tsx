import { DatePicker, Input, Select } from "antd";
import dayjs from 'dayjs';
import { useTranslation } from "react-i18next";
const { TextArea } = Input;
export default function GlobalInput({
    placeholder,
    name,
    type,
    id,
    label,
    className,
    errors,
    formik,
    disabled,
    value,
    localChange,
    options = [],
    typeValue,
    loading,
    fieldNames,
    required,
  }: any) {
    const {t} = useTranslation()
    console.log(options)
  return (
    <>
        <label className={`${className && className} inline-block w-full`}>
        <p className="text-[14px] leading-[24px] mb-[6px]">{label}</p>
        { type == "select" ? 
          <Select
          mode={typeValue}
          className="w-full h-[48px]"
          placeholder={placeholder}
          value={value}
          fieldNames={fieldNames}
          loading={loading}
          onChange={(e) => {
            if (localChange) localChange(e);
          }}
          status={errors && "error" }
          options={options}
        />:
        type == "datePicker"?
          <DatePicker 
          className="w-full p-3"
          id={id}
          name={name} 
          onChange={(e) => {
            if (localChange) localChange(e);
          }}
          value={value ? dayjs(value, 'YYYY-MM-DD') : null}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          status={errors && "error" }
          />:
          type == "textArea"?
          <TextArea
           rows={4}
          className="w-full p-3"
          id={id}
          name={name}
          value={value}
          onChange={(e) => {
            formik.handleChange(e);
            if (localChange) localChange(e);
          }}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          status={errors && "error" }
          disabled={disabled}
          required={required}
        /> 
        : <Input
          className="w-full p-3"
          id={id}
          name={name}
          type={typeValue || "text"}
          value={value}
          onChange={(e) => {
            formik.handleChange(e);
            if (localChange) localChange(e);
          }}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          status={errors && "error" }
          disabled={disabled}
          required={required}
        />   }  

        {errors && <p className="p-0 m-0 text-[12px] font-normal text-red-500">{t(errors)}</p>}
    </label>
    </>
  )
}



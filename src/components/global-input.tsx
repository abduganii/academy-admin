import { Input, Select } from "antd";

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
    required,
  }: any) {
  return (
    <>
        <label className={`${className && className} inline-block w-full`}>
        <p className="text-[14px] leading-[24px] mb-[6px]">{label}</p>
        { type == "select" ? 
          <Select
          mode={typeValue}
          className="w-full h-[48px]"
          placeholder={placeholder}
          defaultValue={value}
          onChange={(e) => {
            if (localChange) localChange(e);
          }}
          options={options}
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
    </label>
    </>
  )
}


export const  DataFiels = (data:any)=>  [
    {
      name: "title",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.title || '',
    },
    {
      name: "description",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.description || '',
    },
   
    {
      name: "image",
      validationType:"number",
      validations: [{ type: "required" }],
      value:data?.image?.id || ''
  },
  ]
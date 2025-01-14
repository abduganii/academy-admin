export const  DataFiels = (data:any)=>  [
    {
      name: "title",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.title || '',
    },
    {
      name: "text",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.text || '',
    },
    {
      name: "logo",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.logo?.id || '',
    },
    {
      name: "type",
      validationType:"string",
      value: 'anti_corruption',
    },
    
    
  ]
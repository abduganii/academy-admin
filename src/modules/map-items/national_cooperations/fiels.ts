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
      name: "type",
      validationType:"string",
      value: 'national_cooperation',
    },
    
    
  ]
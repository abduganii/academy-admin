export const  DataFiels = (data:any)=>  [
    {
      name: "title",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.title || '',
    },
    {
      name: "rate",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.rate || '',
    },
    {
      name: "grade",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.grade || '',
    },
    {
      name: "type",
      validationType:"string",
      value: 'index',
    },
    
    
  ]
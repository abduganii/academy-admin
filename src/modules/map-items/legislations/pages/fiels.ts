export const  DataFiels = (data:any)=>  [
    {
      name: "title",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.title || '',
    },
    {
      name: "content",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.content || '',
    },
    {
      name: "link",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.link || '',
    },
    {
      name: "type",
      validationType:"string",
      value: 'legislation',
    },
    
    
  ]
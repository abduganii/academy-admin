export const  DataFiels = (data:any,type:any)=>  [
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
      name: "link",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.link || '',
    },
    {
      name: "type",
      validationType:"string",
      value:type || '',
    },
  ]

  export const  DataFielsVert = (data:any,type:any)=>  [
  
    {
      name: "text",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.text || '',
    },
    {
      name: "image",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.image?.id || '',
    },
    {
      name: "type",
      validationType:"string",
      value:type || '',
    },
  ]
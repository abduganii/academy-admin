
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
      name: "section",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.section || ''
    },
    {
      name: "isActive",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.isActive || ''
    },
    {
      name: "image",
      validationType:"number",
      validations: [{ type: "required" }],
      value:data?.image || ''
  },
  {
    name: "tags",
    validationType:"array",
    validations: [{ type: "required" }],
    value: data?.tags || []
  },
 
    {
      name: "publishStartTime",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.publishStartTime || ''
      },
      {
        name: "publishEndTime",
        validationType:"string",
        validations: [{ type: "required" }],
        value:data?.publishEndTime || ''
    },
  
   
  
     
  ]
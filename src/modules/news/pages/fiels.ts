
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
      value:data?.section || null
    },
    {
      name: "isActive",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.isActive || null
    },
    {
      name: "image",
      validationType:"number",
      validations: [{ type: "required" }],
      value:data?.image?.id || ''
  },
  {
    name: "tags",
    validationType:"array",
    validations: [{ type: "required" }],
    value: data?.tags?.map((e:any)=>e?.id)  || []
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
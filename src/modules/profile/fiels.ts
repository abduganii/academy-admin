
export const  DataFiels = (data:any)=>  [
    {
      name: "firstName",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.firstName || '',
    },
    {
      name: "lastName",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.lastName || '',
    },
    {
      name: "middleName",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.middleName || '',
    },
    {
      name: "phone",
      validationType:"string",
      validations: [{ type: "required" },{type:'phone' }],
      value:data?.phone || '',
    },
    {
      name: "email",
      validationType:"string",
      validations: [{ type: "required" },{  type:'email' }],
      value:data?.email || ''
    },
    {
      name: "country",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.country || '',
    },
    {
      name: "city",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.city || '',
    },
    {
      name: "organization",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.organization || '',
    },
    {
      name: "position",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.position || '',
    },
  
   
    {
      name: "avatar",
      validationType:"string",
      value:data?.avatar || 2,
    },
    
  ]
  
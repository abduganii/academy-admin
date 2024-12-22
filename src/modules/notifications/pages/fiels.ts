
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
      name: "toAll",
      validationType:"string",
      value:data?.toAll || false,
    },
    {
      name: "users",
      validationType:"array",
      value:data?.users || [],
    },
  ]
  
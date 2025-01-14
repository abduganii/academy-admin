export const  DataFiels = (data:any)=>  [
    {
      name: "name",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.name || '',
    },
    {
      name: "color",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.color || '',
    }
]
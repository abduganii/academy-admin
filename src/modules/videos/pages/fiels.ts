
export const  DataFiels = (data:any)=>  [
    {
      name: "name",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.name || '',
    },
    {
      name: "description",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.description || '',
    },
    {
      name: "releasedYear",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.releasedYear || ''
      },
    {
      name: "country",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.country ||''
    },
    {
      name: "language",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.language || null
    },
    {
      name: "section",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.section || ''
    },
    {
      name: "tags",
      validationType:"array",
      validations: [{ type: "required" }],
      value: data?.tags?.map((e:any)=>e?.id) || []
    },
    {
        name: "poster",
        validationType:"number",
        validations: [{ type: "required" }],
        value:data?.poster?.id || ''
    },
    {
      name: "file",
      validationType:"number",
      validations: [{ type: "required" }],
      value: data?.file?.id || '',
    },
     
  ]
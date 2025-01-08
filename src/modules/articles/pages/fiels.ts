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
      name: 'annotation',
      validationType:"string",
      value:data?.annotation ||''
    },
    {
      name: "section",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.section ||  null
    },
    {
      name: "link",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.link || ''
    },
    {
      name: "file",
      validationType:"number",
      validations: [{ type: "required" }],
      value: data?.file?.id || '',
    },
      {
          name: "author",
          validationType:"number",
          validations: [{ type: "required" }],
          value:data?.author?.id || null
      },
      {
        name: "published_at",
        validationType:"string",
        validations: [{ type: "required" }],
        value:data?.published_at || ''
        },
  ]
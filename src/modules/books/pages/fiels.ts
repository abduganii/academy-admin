export const  DataFiels = (data:any)=>  [
    {
      name: "name",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.name || '',
    },
    {
      name: "image",
      validationType:"number",
      validations: [{ type: "required" }],
      value: data?.image?.id || '',
    },

    {
      name: "lang",
      validationType:"string",
      validations: [{ type: "required" }],
      value:data?.lang || null
      },
      {
        name: "published_at",
        validationType:"string",
        validations: [{ type: "required" }],
        value:data?.published_at || ''
        },
      {
        name: "translator",
        validationType:"number",
        validations: [{ type: "required" }],
        value:data?.translator?.id || null
      },
      {
          name: "author",
          validationType:"number",
          validations: [{ type: "required" }],
          value:data?.author?.id || null
      },
    //   {
    //     name: "category",
    //     validationType:"number",
    //     value:data?.category?.id || null
    // },
      
      {
          name: "publisher",
          validationType:"number",
          validations: [{ type: "required" }],
          value:data?.publisher?.id || null
      },
      {
          name: "pageCount",
          validationType:"number",
          validations: [{ type: "required" }],
          value:data?.pageCount || ''
      },
      {
          name: 'annotation',
          validationType:"string",
          value:data?.annotation ||''
      },
      {
        name: "tags",
        validationType:"array",
        validations: [{ type: "required" }],
        value: data?.tags?.map((e:any)=>e?.id) || []
      },
      {
        name: "section",
        validationType:"string",
        validations: [{ type: "required" }],
        value:data?.section || null
      },
      {
        name: "isPaid",
        validationType:"string",
        validations: [{ type: "required" }],
        value:data?.isPaid || false
      },
      {
        name: "price",
        validationType:"number",
        validations: [{ type: "required" }],
        value:data?.price || ''
    },
    {
      name: "file",
      validationType:"number",
      validations: [{ type: "required" }],
      value: data?.file?.id || '',
    },

  ]
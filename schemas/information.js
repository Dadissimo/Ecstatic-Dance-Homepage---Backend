// schemas/information.js
export default {
    name: 'information',
    type: 'document',
    title: 'Information',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'Id'
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: 'Picture',
        name: 'picture',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          }
        ]
      }
    ]
  }
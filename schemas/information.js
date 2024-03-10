// schemas/information.js
export default {
    name: 'information',
    type: 'document',
    title: 'Information',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'sortNumber',
        type: 'number',
        title: 'Sorting Number',
        description: 'Number for sorting, lowest number will get shown first',
        validation: rule => rule.required()
      },
      {
        name: 'expandedOnDefault',
        type: 'boolean',
        title: 'Is expanded per default',
        description: 'If selected, this information will be expanded initially'
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
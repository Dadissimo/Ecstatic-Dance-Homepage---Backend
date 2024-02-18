export default {
    name: 'rule',
    type: 'document',
    title: 'Rule',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'The title of your rule',
        validation: rule => rule.required()
      },
      {
        name: 'explanation',
        type: 'string',
        title: 'Explanation',
        description: 'Explain your rule',
        validation: rule => rule.required()
      },
    ]
  }
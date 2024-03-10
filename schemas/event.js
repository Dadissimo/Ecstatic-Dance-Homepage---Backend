// schemas/information.js
export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: rule => rule.required().min(10).max(80)
      },
      {
        name: 'startDate',
        type: 'datetime',
        title: 'Starts at',
        dateFormat: 'DD-MM-YYYY HH:mm',
        description: 'When does the dance start?',
        validation: rule => rule.required()
      },
      {
        name: 'endDate',
        type: 'datetime',
        title: 'End Date',
        dateFormat: 'DD-MM-YYYY HH:mm',
        description: 'If left empty it will default to start date plus 3 hours',
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}],
        description: 'Description of the event'
      },
      {
        title: 'News', 
        name: 'news',
        type: 'array', 
        of: [{type: 'block'}],
        description: 'Additional news'
      },
      {
        name: 'dj',
        type: 'reference',
        title: 'DJ',
        weak: true,
        to: [{type: 'crewMember'}],
        description: 'Which DJ is playing?',
        validation: rule => rule.required()
      },
      {
        name: 'location',
        type: 'reference',
        title: 'Location',
        weak: true,
        to: [{type: 'location'}],
        description: 'Where is the event happening?',
        validation: rule => rule.required()
      }
    ]
  }
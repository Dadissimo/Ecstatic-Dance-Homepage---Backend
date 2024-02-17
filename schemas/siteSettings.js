// schemas/siteSettings.js
export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string'
      },
      {
        name: 'quote',
        title: 'Title Quote',
        type: 'text'
      }
    ]
  }
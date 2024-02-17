// schemas/information.js
export default {
    name: 'crewMember',
    type: 'document',
    title: 'DJ and Crew',
    fields: [
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name'
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name'
      },
      {
        name: 'artistName',
        type: 'string',
        title: 'Artist Name'
      },
      {
        name: 'isDj',
        type: 'boolean',
        title: 'Is a Dj?'
      },
      {
        title: 'Picture',
        name: 'picture',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      }
    ]
  }
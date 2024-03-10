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
        name: 'bio',
        type: 'text',
        title: 'Biography'
      },
      {
        name: 'isDj',
        type: 'boolean',
        title: 'Is a Dj?'
      },
      {
        name: 'isGuest',
        type: 'boolean',
        title: 'Is only a guest?',
        description: 'If selected, this crew member wont be shown in the crew section'
      },
      {
        title: 'Picture',
        name: 'picture',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        name: 'instagram',
        type: 'string',
        title: 'Instagram',
        description: 'Enter only the tag after instagram.com/...'
      },
      {
        name: 'facebook',
        type: 'string',
        title: 'Facebook',
        description: 'Enter only the tag after facebook.com/...'
      },
      {
        name: 'soundcloud',
        type: 'string',
        title: 'Soundcloud',
        description: 'Enter only the tag after soundcloud.com/...'
      },
      {
        name: 'homepage',
        type: 'string',
        title: 'Homepage',
        description: 'Enter the full address'
      },
    ]
  }
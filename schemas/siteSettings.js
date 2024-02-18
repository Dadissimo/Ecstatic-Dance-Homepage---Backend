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
      },
      {
        title: 'Home Banner',
        name: 'homeBanner',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        title: 'Event Banner',
        name: 'eventBanner',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        title: 'Dance Info Banner',
        name: 'danceInfoBanner',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        title: 'Contact Banner',
        name: 'contactBanner',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
    ]
  }
// schemas/information.js
export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'address',
        type: 'string',
        title: 'Address'
      },
      {
        name: 'googleMapLink',
        type: 'string',
        title: 'Google Map Link'
      },
    ]
  }

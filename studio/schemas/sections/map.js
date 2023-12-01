export default {
  type: 'object',
  name: 'map',
  title: 'Map',
  fields: [
    {
      type: 'array',
      name: 'geopoints',
      title: 'Geopoints',
      of: [{type: 'geoMarker'}],
    },
  ],
}

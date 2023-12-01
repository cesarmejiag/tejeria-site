export default {
  type: 'object',
  name: 'geoMarker',
  title: 'Marker',
  fields: [
    {
      type: 'geopoint',
      name: 'geopoint',
      title: 'Geopoint',
    },
    {
      type: 'img',
      name: 'image',
      title: 'Image',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'portableText',
      name: 'description',
      title: 'Description',
    },
  ],
}

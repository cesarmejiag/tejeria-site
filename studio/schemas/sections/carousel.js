export default {
  type: 'object',
  name: 'carousel',
  title: 'Carousel',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'stepCard'}],
    },
  ],
}

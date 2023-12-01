export default {
  name: 'figure',
  title: 'Figure',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'img',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
  ],
  preview: {
    select: {
      imageUrl: 'image.asset.url',
      title: 'caption',
    },
  },
}

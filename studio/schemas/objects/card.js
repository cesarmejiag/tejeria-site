export default {
  type: 'object',
  name: 'card',
  title: 'Card',
  fields: [
    {
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [{type: 'img'}],
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
    {
      type: 'link',
      name: 'link',
      title: 'Link',
    },
  ],
}

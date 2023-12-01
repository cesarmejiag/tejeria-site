export default {
  type: 'object',
  name: 'faq',
  title: 'FAQ',
  fields: [
    {
      type: 'string',
      name: 'question',
      title: 'Question',
    },
    {
      type: 'portableText',
      name: 'answer',
      title: 'Answer',
    },
  ],
}

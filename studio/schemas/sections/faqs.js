export default {
  type: 'object',
  name: 'faqs',
  title: "FAQ's",
  fields: [
    {
      type: 'array',
      name: 'faq',
      title: 'FAQ',
      of: [{type: 'faq'}],
    },
  ],
}

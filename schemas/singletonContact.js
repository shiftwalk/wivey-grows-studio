export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Heading',
      name: 'heroHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram URL',
      name: 'instagramUrl',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Facebook URL',
      name: 'facebookUrl',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Donation URL',
      name: 'donationUrl',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Donation Image',
      name: 'donationImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Stay In The Loop Image',
      name: 'stayInTheLoopImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}
export default {
  title: 'About Us',
  name: 'about',
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
      title: 'Intro Text',
      name: 'introText',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Image Gallery',
      name: 'introImageGallery',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    },
    {
      title: 'Ethos Points',
      name: 'ethosPoints',
      type: 'array', 
      of: [{type: 'text', rows: 3 }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Our Growers Text',
      name: 'ourGrowersText',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Our Sponsors/Donators Text',
      name: 'ourSponsorsText',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
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
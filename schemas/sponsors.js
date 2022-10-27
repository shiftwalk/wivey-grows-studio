// import slugify from '../utils/slugify'

export default {
  title: "Sponsors",
  name: 'sponsors',
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Image/Logo",
      name: "image",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      title: "Text",
      name: "text",
      type: "text",
      rows: 4,
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
    },
    prepare(selection) {
      const {name, image} = selection
      return {
        title: `${name}`,
        media: image
      }
    }
  }
}
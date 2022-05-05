// import slugify from '../utils/slugify'

export default {
  title: "Growers",
  name: 'growers',
  type: "document",
  fields: [
    {
      title: "First Name",
      name: "firstName",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Last Name",
      name: "lastName",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Bio",
      name: "bio",
      type: "text",
      rows: 4,
    },
    {
      title: "Image",
      name: "image",
      type: "defaultImage",
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      image: 'image',
    },
    prepare(selection) {
      const {firstName, lastName, image} = selection
      return {
        title: `${firstName} ${lastName}`,
        media: image
      }
    }
  }
}
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonAbout from './singletonAbout'
import singletonContact from './singletonContact'
import singletonCalendar from './singletonCalendar'

// Documents
import growers from './growers'
import blog from './blog'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonAbout,
    singletonContact,
    singletonCalendar,
    growers,
    blog,
    defaultImage,
    seo
  ]),
})

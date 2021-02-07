import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'

import categories from './categories';
import lessons from './lessons';


export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    categories,
    lessons
  ])
})

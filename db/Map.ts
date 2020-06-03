import { contentful } from '~/db'
import { prettifyEntry } from '~/db/utils'

const baseOptions = {
  content_type: 'map'
}

export const all = async (): Promise<Array<any>> => {
  const entries = await contentful.getEntries({ ...baseOptions })
  return entries.items.map(item => prettifyEntry(item))
}

export default {
  all
}
import { type SchemaTypeDefinition } from 'sanity'
import { product,Category } from './product'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category],
}

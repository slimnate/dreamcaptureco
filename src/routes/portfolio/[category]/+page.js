/** @type {import('./$types').PageLoad} */
export async function load( { params }) {
  return {
    category: params.category
  }
}
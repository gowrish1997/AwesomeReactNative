import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
const client = createClient({
  projectId: 'nn5x00sr', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-10-21',
});
const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);
export default client;

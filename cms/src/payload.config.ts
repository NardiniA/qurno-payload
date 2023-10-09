import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Access/Users';
import API from './collections/Access/API';
import { viteBundler } from '@payloadcms/bundler-vite'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { adapter } from './utilities/adapter';
import Media from './collections/Media';

export default buildConfig({
  serverURL: process.env.PAYLOAD_ADMIN_URL,
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: slateEditor({}),
  collections: [Media, Users, API],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: adapter(process.env.MEDIA_BUCKET),
          disableLocalStorage: true,
          prefix: "",
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})

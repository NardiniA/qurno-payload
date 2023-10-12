import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'
import { viteBundler } from '@payloadcms/bundler-vite'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { adapter } from './utilities/adapter';

import Users from './collections/Access/Users';
import API from './collections/Access/API';
import Media from './collections/Media';
import Posts from './collections/Blog/Posts';
import Tags from './collections/Blog/Tags';
import Authors from './collections/Blog/Authors';
import Pages from './collections/Pages';
import Alerts from './collections/Admin/Alerts';
import redirects from '@payloadcms/plugin-redirects';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import Redirects from './collections/Admin/Redirects';
import FormBuilder from "@payloadcms/plugin-form-builder";
import Form from './collections/Forms/Form'
import Submissions from './collections/Forms/Submissions'
import Fields from './collections/Forms/Fields'
import Settings from './globals/Settings'
import Navigation from './globals/Navigation'

export default buildConfig({
  serverURL: process.env.PAYLOAD_ADMIN_URL,
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  collections: [
    // Access
    Users,
    API,
    // Admin
    Alerts,
    // Blog
    Posts,
    Tags,
    Authors,
    // Content 
    Pages,
    Media,
  ],
  globals: [
    Settings,
    Navigation,
  ],
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
    redirects({
      collections: ["pages", "posts"],
      overrides: Redirects,
    }),
    nestedDocs({
      collections: ["pages"],
      parentFieldSlug: "parent",
      breadcrumbsFieldSlug: "breadcrumbs",
    }),
    FormBuilder({
      formOverrides: Form,
      formSubmissionOverrides: Submissions,
      fields: Fields,
      redirectRelationships: ["pages"],
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})

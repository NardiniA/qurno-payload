import type { CollectionConfig } from 'payload/types'
import { permissions } from '../fields/permissions'
import { isAdminOrSelf } from '../../../access/isAdminOrSelf'
import { isAdmin, isAdminFieldLevel } from '../../../access/isAdmin'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ["name", "emails"],
    group: "Access",
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          admin: {
            width: "30%",
          },
          required: true,
        },
        {
          name: "roles",
          label: "Roles",
          type: "select",
          options: [
            {
              label: "Editor",
              value: "editor",
            },
            {
              label: "Admin",
              value: "admin",
            },
          ],
          defaultValue: "editor",
          hasMany: false,
          access: {
            create: isAdminFieldLevel,
            update: isAdminFieldLevel,
          },
          required: true,
        },
      ],
    },
    permissions({
      overrides: {
        admin: {
          condition: (_, { roles }) => roles === "editor",
        },
        access: {
          create: isAdminFieldLevel,
          update: isAdminFieldLevel,
        },
      },
    }),
  ],
}

export default Users

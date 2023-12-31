/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    'api-access': ApiAccess;
    alerts: Alert;
    posts: Post;
    tags: Tag;
    authors: Author;
    pages: Page;
    media: Media;
    redirects: Redirect;
    forms: Form;
    'form-submissions': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  name: string;
  roles: 'editor' | 'admin';
  permissions?: {
    pages?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    media?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    posts?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    tags?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    authors?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    alerts?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    redirects?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
  };
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface ApiAccess {
  id: string;
  name: string;
  permissions?: {
    pages?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    media?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    posts?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    tags?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    authors?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    alerts?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
    redirects?: {
      read?: boolean;
      create?: boolean;
      update?: boolean;
      delete?: boolean;
    };
  };
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
}
export interface Alert {
  id: string;
  name: string;
  theme: 'info' | 'success' | 'warning' | 'error';
  placement: 'global' | 'individual';
  documents:
    | (
        | {
            relationTo: 'pages';
            value: string;
          }
        | {
            relationTo: 'posts';
            value: string;
          }
      )[]
    | (
        | {
            relationTo: 'pages';
            value: Page;
          }
        | {
            relationTo: 'posts';
            value: Post;
          }
      )[];
  content: {
    [k: string]: unknown;
  }[];
  links?: {
    link: {
      appearance?: 'text' | 'primaryButton' | 'secondaryButton';
      type?: 'reference' | 'custom';
      label: string;
      reference:
        | {
            relationTo: 'pages';
            value: string | Page;
          }
        | {
            relationTo: 'posts';
            value: string | Post;
          };
      url: string;
      newTab?: boolean;
    };
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Page {
  id: string;
  title: string;
  slug?: string;
  parent?: string | Page;
  breadcrumbs?: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  hero: {
    type: 'page_header' | 'banner';
    page_header?: {
      title: string;
    };
    banner?: {
      title: string;
    };
  };
  layout: {
    sections: (
      | {
          content: {
            [k: string]: unknown;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'about-block';
        }
      | {
          title?: string;
          type: 'auto' | 'custom';
          limit: number;
          custom: string[] | Post[];
          id?: string;
          blockName?: string;
          blockType: 'post-block';
        }
      | {
          title?: string;
          type: 'auto' | 'custom';
          limit: number;
          custom: string[] | Tag[];
          id?: string;
          blockName?: string;
          blockType: 'tags-block';
        }
      | {
          title?: string;
          type: 'auto' | 'custom';
          limit: number;
          custom: string[] | Author[];
          id?: string;
          blockName?: string;
          blockType: 'authors-block';
        }
    )[];
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaImage: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Post {
  id: string;
  post: {
    title: string;
    description: string;
    thumbnail: string | Media;
  };
  content: {
    content: {
      [k: string]: unknown;
    }[];
  };
  slug?: string;
  publishDate: string;
  author: string | Author;
  tags: string | Tag;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Media {
  id: string;
  alt: string;
  poster: string | Media;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    thumbnail?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface Author {
  id: string;
  name: string;
  bio: string;
  profile: string | Media;
  slug?: string;
  social?: {
    platform: string;
    url: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Tag {
  id: string;
  name: string;
  slug?: string;
  updatedAt: string;
  createdAt: string;
}
export interface Redirect {
  id: string;
  from: string;
  to: {
    type?: 'reference' | 'custom';
    reference:
      | {
          relationTo: 'pages';
          value: string | Page;
        }
      | {
          relationTo: 'posts';
          value: string | Post;
        };
    url: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        label: string;
        placeholder: string;
        name?: string;
        defaultValue: string;
        size: 'col-lg-12' | 'col-lg-6 col-md-12' | 'col-lg-4 col-md-6 col-12' | 'col-lg-3 col-md-6 col-12';
        validation: {
          required: {
            value?: boolean;
            message: string;
          };
          min: {
            value?: number;
            message: string;
          };
          max: {
            value?: number;
            message: string;
          };
          minLength: {
            value?: number;
            message: string;
          };
          maxLength: {
            value?: number;
            message: string;
          };
          pattern: {
            value?: string;
            message: string;
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        label: string;
        placeholder: string;
        name?: string;
        defaultValue: string;
        size: 'col-lg-12' | 'col-lg-6 col-md-12' | 'col-lg-4 col-md-6 col-12' | 'col-lg-3 col-md-6 col-12';
        validation: {
          required: {
            value?: boolean;
            message: string;
          };
          min: {
            value?: number;
            message: string;
          };
          max: {
            value?: number;
            message: string;
          };
          minLength: {
            value?: number;
            message: string;
          };
          maxLength: {
            value?: number;
            message: string;
          };
          pattern: {
            value?: string;
            message: string;
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        label: string;
        placeholder: string;
        name?: string;
        size: 'col-lg-12' | 'col-lg-6 col-md-12' | 'col-lg-4 col-md-6 col-12' | 'col-lg-3 col-md-6 col-12';
        options: {
          label: string;
          id?: string;
        }[];
        validation: {
          required: {
            value?: boolean;
            message: string;
          };
          minLength: {
            value?: number;
            message: string;
          };
          maxLength: {
            value?: number;
            message: string;
          };
          pattern: {
            value?: string;
            message: string;
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        label: string;
        placeholder: string;
        name?: string;
        defaultValue: string;
        size: 'col-lg-12' | 'col-lg-6 col-md-12' | 'col-lg-4 col-md-6 col-12' | 'col-lg-3 col-md-6 col-12';
        validation: {
          required: {
            value?: boolean;
            message: string;
          };
          pattern: {
            value?: string;
            message: string;
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        label: string;
        placeholder: string;
        name?: string;
        defaultValue: string;
        size: 'col-lg-12' | 'col-lg-6 col-md-12' | 'col-lg-4 col-md-6 col-12' | 'col-lg-3 col-md-6 col-12';
        validation: {
          required: {
            value?: boolean;
            message: string;
          };
          min: {
            value?: number;
            message: string;
          };
          max: {
            value?: number;
            message: string;
          };
          pattern: {
            value?: string;
            message: string;
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        label: string;
        defaultValue?: boolean;
        validation: {
          required: {
            value?: boolean;
            message: string;
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    type?: 'reference' | 'custom';
    reference: {
      relationTo: 'pages';
      value: string | Page;
    };
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'api-access';
        value: string | ApiAccess;
      };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes {
    collections: {
      'users': User
      'api-access': ApiAccess
      'alerts': Alert
      'posts': Post
      'tags': Tag
      'authors': Author
      'pages': Page
      'media': Media
      'redirects': Redirect
      'forms': Form
      'form-submissions': FormSubmission
      'payload-preferences': PayloadPreference
      'payload-migrations': PayloadMigration
    }

  }
}
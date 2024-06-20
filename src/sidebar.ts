// Copyright © 2022 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import {
  SidebarItem,
  SidebarItemCategoryConfig,
} from "@docusaurus/plugin-content-docs/src/sidebars/types"

const homeLink: SidebarItem = {
  type: "link",
  href: "/welcome",
  className: "all-docs-link",
  label: "Go to Main Page",
}

const referenceSidebars = {
  reference: [
    homeLink,
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      collapsible: false,
      items: ["reference/api", "sdk", "keto/reference/ory-permission-language"],
    },
  ],
}

const guidesSidebars = {
  "quickstarts-and-tutorials": [
    homeLink,
    "getting-started/local-development",
    {
      type: "category",
      label: "Quickstart",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "getting-started/overview",
      },
      items: [
        "getting-started/integrate-auth/go",
        "getting-started/integrate-auth/php",
        "getting-started/integrate-auth/expressjs",
        "getting-started/integrate-auth/react",
        "getting-started/integrate-auth/react-native",
        "getting-started/integrate-auth/vue",
        "getting-started/integrate-auth/nextjs",
        "getting-started/integrate-auth/flutter-web-redirect",
        "getting-started/integrate-auth/dotnet",
      ],
    },
    {
      type: "category",
      label: "SDK Guides",
      collapsed: false,
      collapsible: false,
      items: ["kratos/sdk/go"],
    },
  ],
  troubleshooting: [
    homeLink,
    {
      type: "category",
      label: "Troubleshooting",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        slug: "category/troubleshooting/",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "troubleshooting",
        },
        "oauth2-oidc/identity-provider-integration-settings",
      ],
    },
  ],
  migrateToOry: [
    homeLink,
    "migrate-to-ory/index",
    "migrate-to-ory/auth0",
    "hydra/self-hosted/migrating-from-mitreid",
  ],
}

const identitiesSidebar = {
  identities: [
    homeLink,
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "identities/index",
      },
      items: [
        "security-model",
        "identities/native-browser",
        "concepts/redirects",
      ],
    },
    {
      type: "category",
      label: "Authentication",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "kratos/concepts/credentials",
      },
      items: [
        {
          type: "category",
          label: "Authentication methods",
          link: {
            type: "generated-index",
            slug: "category/authentication-methods/",
          },
          items: [
            "kratos/concepts/credentials/username-email-password",
            "concepts/password-policy",
            "kratos/social-signin/overview",
            "kratos/passwordless/overview",
            "kratos/mfa/overview",
            "kratos/organizations/organizations",
          ],
        },
        {
          type: "category",
          label: "Configure authentication",
          link: {
            type: "generated-index",
            slug: "category/configure-authentication/",
          },
          items: [
            {
              type: "category",
              label: "Social Sign-in",
              items: [
                {
                  type: "category",
                  label: "Social Sign-in Providers",
                  items: [
                    "kratos/social-signin/generic",
                    "kratos/social-signin/ory",
                    "kratos/social-signin/google",
                    "kratos/social-signin/facebook",
                    "kratos/social-signin/microsoft",
                    "kratos/social-signin/github",
                    "kratos/social-signin/apple",
                    "kratos/social-signin/gitlab",
                    "kratos/social-signin/auth0",
                    "kratos/social-signin/slack",
                    "kratos/social-signin/spotify",
                    "kratos/social-signin/discord",
                    "kratos/social-signin/twitch",
                    "kratos/social-signin/netid",
                    "kratos/social-signin/yandex",
                    "kratos/social-signin/vk",
                    "kratos/social-signin/dingtalk",
                    "kratos/social-signin/lark",
                    "kratos/social-signin/patreon",
                    "kratos/social-signin/linkedin",
                    "kratos/social-signin/get-tokens",
                    "kratos/social-signin/data-mapping",
                    "kratos/social-signin/account-linking",
                    "kratos/social-signin/native-apps",
                    "kratos/social-signin/x-twitter",
                  ],
                },
                "kratos/social-signin/data-mapping",
                "kratos/social-signin/get-tokens",
                "identities/sign-in/social-sign-in/redirect-url",
                "kratos/social-signin/native-apps",
              ],
            },
            {
              type: "category",
              label: "Passwordless",
              items: [
                "kratos/passwordless/passkeys",
                "kratos/passwordless/webauthn",
                "kratos/passwordless/code",
              ],
            },
            {
              type: "category",
              label: "Multi-factor Authentication",
              items: [
                "kratos/mfa/lookup-secrets",
                "kratos/mfa/totp",
                "kratos/mfa/webauthn-fido-yubikey",
                "kratos/mfa/sms",
                "kratos/mfa/step-up-authentication",
              ],
            },
            {
              type: "category",
              label: "Emails & SMS",
              items: [
                "kratos/emails-sms/sending-emails-smtp",
                "kratos/emails-sms/sending-sms",
              ],
            },
            {
              type: "category",
              label: "Ory Actions",
              items: [
                "guides/integrate-with-ory-cloud-through-webhooks",
                "identities/sign-in/actions",
                "actions/revoke-active-sessions",
                "actions/session",
                "actions/require-verified-address",
              ],
            },
            "identities/sign-in/saml",
            "identities/session-to-jwt-cors",
            "identities/sign-in/two-step-registration",
            "identities/sign-in/login-hint",
            "guides/cli/config-identity-service",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Self-service user flows",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "kratos/self-service",
      },
      items: [
        {
          type: "category",
          label: "Flows",
          items: [
            "kratos/concepts/browser-redirect-flow-completion",
            "kratos/self-service/flows/user-registration",
            "kratos/self-service/flows/user-login",
            "kratos/self-service/flows/user-logout",
            "kratos/self-service/flows/user-settings",
            "kratos/self-service/flows/verify-email-account-activation",
            "kratos/self-service/flows/account-recovery-password-reset",
            "kratos/self-service/flows/user-facing-errors",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Identity schema",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "kratos/manage-identities/overview",
      },
      items: [
        {
          type: "category",
          label: "Configure identity schema",
          items: [
            "kratos/manage-identities/identity-schema",
            "kratos/manage-identities/managing-users-identities-metadata",
            "identities/model/manage-identity-schema",
            "kratos/manage-identities/customize-identity-schema",
            "kratos/manage-identities/best-practices",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Identity management",
      link: {
        type: "generated-index",
        slug: "category/identity-management/",
      },
      items: [
        "kratos/manage-identities/create-users-identities",
        "kratos/manage-identities/import-user-accounts-identities",
        "identities/model/identity-state",
        "kratos/manage-identities/invite-users",
        "kratos/manage-identities/account-recovery",
        "kratos/manage-identities/export-user-accounts-identities",
      ],
    },

    {
      type: "category",
      label: "Session management",
      link: {
        type: "doc",
        id: "kratos/session-management/overview",
      },
      items: [
        "identities/sign-in/check-session",
        "kratos/session-management/session-lifespan",
        "kratos/session-management/refresh-extend-sessions",
        "kratos/session-management/revoke-sessions-hook",
      ],
    },
    {
      type: "category",
      label: "User interface",
      link: {
        type: "doc",
        id: "kratos/bring-your-own-ui/index",
      },
      items: [
        "account-experience/index",
        {
          type: "category",
          label: "Custom user interface",
          items: [
            "getting-started/custom-ui",
            "kratos/concepts/ui-user-interface",
            "kratos/bring-your-own-ui/custom-ui-basic-integration",
            "kratos/bring-your-own-ui/custom-ui-advanced-integration",
            "kratos/bring-your-own-ui/custom-ui-ory-elements",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Send Emails & SMS",
      link: {
        type: "doc",
        id: "kratos/emails-sms/custom-email-templates",
      },
      items: ["kratos/emails-sms/custom-email-templates"],
    },
  ],
}

const oauth2Sidebar = {
  oauth2: [
    homeLink,
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "oauth2-oidc/index",
      },
      items: [
        "oauth2-oidc/overview/oauth2-concepts",
        "oauth2-oidc/overview/oidc-concepts",
        "hydra/concepts/before-oauth2",
        "hydra/guides/using-oauth2",
      ],
    },
    {
      type: "category",
      label: "Flows",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "oauth2-oidc/authorization-code-flow",
      },
      items: [
        "oauth2-oidc/authorization-code-flow",
        "oauth2-oidc/client-credentials",
        "oauth2-oidc/resource-owner-password-grant",
        "oauth2-oidc/refresh-token-grant",
        "oauth2-oidc/userinfo-oidc",
        "oauth2-oidc/oidc-logout",
      ],
    },
    {
      type: "category",
      label: "Client management",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "hydra/guides/oauth2-clients",
      },
      items: ["hydra/jwks", "hydra/guides/openid", "oauth2-oidc/issuer-url"],
    },
    {
      type: "category",
      label: "Token management",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "hydra/guides/oauth2-token-introspection",
      },
      items: [
        "oauth2-oidc/revoke-consent",
        "oauth2-oidc/skip-consent",
        {
          type: "category",
          label: "Configure tokens",
          items: [
            "oauth2-oidc/jwt-access-token",
            "hydra/guides/audiences",
            "hydra/guides/jwt",
            "hydra/guides/client-token-expiration",
            "oauth2-oidc/claims-scope",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "User Interface",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "hydra/guides/custom-ui-oauth2",
      },
      items: ["oauth2-oidc/custom-login-consent/flow", "hydra/guides/logout"],
    },
  ],
}

const permissionsSidebar = {
  permissions: [homeLink, "keto/index"],
}

module.exports = {
  docs: [
    {
      type: "category",
      label: "Services",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "intro",
      },
      items: [
        "identities/index",
        "oauth2-oidc/index",
        "keto/index",
        "kratos/hooks/configure-hooks",
      ],
    } satisfies SidebarItemCategoryConfig,
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        slug: "category/guides/",
      },
      items: [
        {
          type: "doc",
          id: "getting-started/overview",
        },
        {
          type: "doc",
          id: "troubleshooting/index",
        },
        {
          type: "doc",
          id: "migrate-to-ory/index",
        },
      ],
    } satisfies SidebarItemCategoryConfig,
    {
      type: "category",
      label: "Operations",
      link: {
        type: "generated-index",
        slug: "category/operations/",
      },
      items: [
        "api/index",
        "guides/custom-domains",
        "concepts/personal-access-token",
        "guides/upgrade/sdk-v1",
        "guides/cors",
        "concepts/cache",
        "guides/rate-limits",
        "guides/ip-allowlist",
        "actions/live-events",
        "api/eventual-consistency",
        "guides/gitops",
        {
          type: "category",
          label: "Ory CLI guides",
          items: [
            "guides/cli/installation",
            "guides/cli/cli-basics",
            "guides/cli/proxy-and-tunnel",
            "guides/cli/config-with-cli",
          ],
        },
      ],
    } satisfies SidebarItemCategoryConfig,
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        slug: "category/reference/",
      },
      items: [
        "reference/api",
        "sdk",
        "keto/reference/ory-permission-language",
        {
          "CLI Reference": [
            {
              type: "autogenerated",
              dirName: "cli",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Ory Open Source",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "open-source",
      },
      items: [
        "ecosystem/community",
        "open-source/licenses",
        {
          type: "link",
          href: "https://github.com/ory",
          label: "GitHub",
        },
      ],
    },
    {
      type: "category",
      label: "Compliance and security",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "security-compliance/compliance-and-certifications",
      },
      items: [
        "kratos/concepts/security",
        "ecosystem/security",
        "security-compliance/gdpr",
        "security-compliance/token-formats",
      ],
    },
    {
      type: "link",
      href: "https://www.ory.sh/docs/search",
      label: "Search",
    },
  ],
  ...referenceSidebars,
  ...guidesSidebars,
  ...identitiesSidebar,
  ...oauth2Sidebar,
  ...permissionsSidebar,

  sdk: [],
  api: [],
  selfhosting: [],

  //   {
  //     type: "category",
  //     label: "Permissions and relationships",
  //     items: [
  //       "keto/index",
  //       "keto/guides/simple-access-check-guide",
  //       "keto/modeling/create-permission-model",
  //       {
  //         Concepts: [
  //           {
  //             type: "autogenerated",
  //             dirName: "keto/concepts",
  //           },
  //         ],
  //       },
  //       {
  //         Guides: [
  //           "keto/guides/list-api-display-objects",
  //           "keto/guides/expand-api-display-who-has-access",
  //           "keto/guides/rbac",
  //         ],
  //       },
  //       {
  //         Examples: ["keto/examples/olymp-file-sharing"],
  //       },
  //       "keto/reference/ory-permission-language",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Actions",
  //     items: [
  //       "kratos/hooks/configure-hooks",
  //       "actions/live-events",
  //       "guides/integrate-with-ory-cloud-through-webhooks",
  //       "actions/session",
  //       "actions/revoke-active-sessions",
  //       "actions/require-verified-address",
  //       "hydra/guides/claims-at-refresh",
  //       {
  //         type: "category",
  //         label: "CRM Integrations",
  //         items: [
  //           "actions/integrations/mailchimp",
  //           "actions/integrations/hubspot",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Analytics Integrations",
  //         items: ["actions/integrations/segment"],
  //       },
  //     ],
  //   },
  //   "account-experience/index",
  //   {
  //     type: "category",
  //     label: "Ory CLI",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "guides/cli",
  //       },
  //       {
  //         Reference: [
  //           {
  //             type: "autogenerated",
  //             dirName: "cli",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Migrating to Ory",
  //     items: [
  //       "hydra/self-hosted/migrating-from-mitreid",
  //       "migrate-to-ory/auth0",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "From dev to prod",
  //     items: [
  //       "guides/custom-domains",
  //       "guides/cors",
  //       "guides/gitops",
  //       "guides/rate-limits",
  //       "guides/allowlist",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Open source",
  //     items: [
  //       "open-source",
  //       "ecosystem/community",
  //       "ecosystem/contributing",
  //       "open-source/commitment",
  //       "ecosystem/software-architecture-philosophy",
  //       {
  //         type: "category",
  //         label: "Guidelines",
  //         items: [
  //           "open-source/guidelines/rest-api-guidelines",
  //           "kratos/guides/e2e-integration-tests",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Security and compliance",
  //     items: [
  //       "security-compliance/compliance-and-certifications",
  //       "ecosystem/security",
  //       "kratos/concepts/security",
  //       "security-compliance/token-formats",
  //       "concepts/password-policy",
  //       "hydra/security-architecture",
  //       "security-compliance/gdpr",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Troubleshooting",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "troubleshooting",
  //       },
  //       {
  //         type: "category",
  //         label: "OAuth2 and OpenID Connect",
  //         items: [
  //           "hydra/debug",
  //           "hydra/debug/token-endpoint-auth-method",
  //           "hydra/debug/logout",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Upgrade guides",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "guides/upgrade",
  //       },
  //     ],
  //   },
  //   {
  //     type: "link",
  //     label: "Search",
  //     href: "https://www.ory.sh/docs/search",
  //   },
  // ],
  // selfhosting: [
  //   "ecosystem/projects",
  //   {
  //     type: "category",
  //     label: "Open source",
  //     items: [
  //       "open-source",
  //       "ecosystem/community",
  //       "ecosystem/contributing",
  //       "open-source/commitment",
  //       "ecosystem/software-architecture-philosophy",
  //       {
  //         type: "category",
  //         label: "Guidelines",
  //         items: [
  //           "open-source/guidelines/rest-api-guidelines",
  //           "kratos/guides/e2e-integration-tests",
  //         ],
  //       },
  //     ],
  //   },
  //   "self-hosted/deployment",
  //   "ecosystem/configuring",
  //   {
  //     type: "category",
  //     label: "Operations and SRE",
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "self-hosted/operations",
  //       },
  //     ],
  //   },
  //   "ecosystem/upgrading",
  //   "ecosystem/sqa",
  //   "ecosystem/changelog",
  //   "ecosystem/benchmark",
  //   {
  //     type: "category",
  //     label: "Ory Kratos",
  //     items: [
  //       "kratos/ory-kratos-intro",
  //       "kratos/install",
  //       "kratos/quickstart",
  //       "kratos/guides/docker",
  //       "kratos/guides/deploy-kratos-example",
  //       "kratos/guides/upgrade",
  //       {
  //         type: "category",
  //         label: "Configuration",
  //         items: [
  //           "kratos/configuring",
  //           "kratos/guides/configuring-cookies",
  //           "kratos/guides/multi-domain-cookies",
  //           "self-hosted/kratos/configuration/password",
  //           "kratos/self-hosted/mfa",
  //           "kratos/guides/setting-up-cors",
  //           "kratos/self-hosted/account-activation-email-verification",
  //           "self-hosted/kratos/configuration/oidc",
  //           "kratos/guides/setting-up-password-hashing-parameters",
  //           "kratos/guides/select-cipher-algorithm",
  //           "kratos/self-hosted/email-http",
  //           "kratos/reference/configuration-editor",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Guides",
  //         items: [
  //           "kratos/guides/production",
  //           "kratos/guides/multi-tenancy-multitenant",
  //           "self-hosted/operations/scalability",
  //           "kratos/self-hosted/mail-courier-templates",
  //           "kratos/guides/tracing",
  //           "kratos/guides/zero-trust-iap-proxy-identity-access-proxy",
  //           "kratos/guides/https-tls",
  //           "kratos/guides/hosting-own-have-i-been-pwned-api",
  //           "kratos/guides/secret-key-rotation",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Troubleshooting",
  //         items: [
  //           {
  //             type: "autogenerated",
  //             dirName: "kratos/debug",
  //           },
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Reference",
  //         items: [
  //           "kratos/reference/api",
  //           {
  //             "Command Line Interface (CLI)": [
  //               {
  //                 type: "autogenerated",
  //                 dirName: "kratos/cli",
  //               },
  //             ],
  //           },
  //           {
  //             SDK: ["kratos/sdk/overview", "kratos/self-hosted/go"],
  //           },
  //           "kratos/reference/configuration",
  //           "kratos/reference/json-schema-json-paths",
  //           "kratos/reference/html-forms",
  //           "kratos/reference/jsonnet",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Ory Hydra",
  //     items: [
  //       "hydra/self-hosted/install",
  //       "hydra/5min-tutorial",
  //       "hydra/self-hosted/deploy-hydra-example",
  //       "hydra/self-hosted/upgrade",
  //       {
  //         type: "category",
  //         label: "Configuration",
  //         items: [
  //           "hydra/reference/configuration",
  //           "hydra/reference/configuration-editor",
  //           "hydra/self-hosted/configure-deploy",
  //           "hydra/self-hosted/dependencies-environment",
  //           "hydra/self-hosted/production",
  //           "hydra/self-hosted/hsm-support",
  //           "self-hosted/operations/scalability",
  //           "hydra/self-hosted/merge-multiple-db-secrets",
  //           "hydra/self-hosted/gitlab",
  //           "hydra/self-hosted/secrets-key-rotation",
  //           "hydra/self-hosted/kubernetes-helm-chart",
  //           "hydra/self-hosted/ssl-https-tls",
  //           "self-hosted/operations/tracing",
  //           "hydra/guides/cookies",
  //           "hydra/guides/cors",
  //           "self-hosted/hydra/debug/csrf",
  //         ],
  //       },
  //       {
  //         type: "category",
  //         label: "Reference",
  //         items: [
  //           "hydra/reference/api",
  //           {
  //             "Command Line Interface (CLI)": [
  //               {
  //                 type: "autogenerated",
  //                 dirName: "hydra/cli",
  //               },
  //             ],
  //           },
  //           {
  //             SDK: [
  //               "hydra/sdk/overview",
  //               "hydra/self-hosted/go",
  //               "hydra/self-hosted/js",
  //             ],
  //           },
  //         ],
  //       },
  //       "ecosystem/benchmark",
  //       "hydra/case-study",
  //       "hydra/faq",
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Ory Keto",
  //     items: [
  //       "keto/install",
  //       "keto/quickstart",
  //       "keto/guides/production",
  //       "keto/guides/v0.7-migration",
  //       "keto/guides/migrating-legacy-policies",
  //       "keto/guides/upgrade",
  //       {
  //         Reference: [
  //           "keto/reference/rest-api",
  //           "keto/reference/proto-api",
  //           {
  //             "Command Line Interface (CLI)": [
  //               {
  //                 type: "autogenerated",
  //                 dirName: "keto/cli",
  //               },
  //             ],
  //           },
  //           {
  //             SDK: ["keto/sdk/overview", "keto/self-hosted/go"],
  //           },
  //           "keto/reference/configuration",
  //           "keto/reference/configuration-editor",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "category",
  //     label: "Ory Oathkeeper",
  //     items: [
  //       {
  //         Introduction: ["oathkeeper/index", "oathkeeper/install"],
  //       },
  //       {
  //         "Core Concepts": [
  //           "oathkeeper/api-access-rules",
  //           {
  //             type: "category",
  //             label: "Handlers",
  //             items: [
  //               "oathkeeper/pipeline",
  //               "oathkeeper/pipeline/authn",
  //               "oathkeeper/pipeline/authz",
  //               "oathkeeper/pipeline/mutator",
  //               "oathkeeper/pipeline/error",
  //             ],
  //           },
  //           "oathkeeper/grpc-middleware",
  //         ],
  //       },
  //       {
  //         Guides: [
  //           "oathkeeper/configure-deploy",
  //           "oathkeeper/guides/proxy-websockets",
  //           "oathkeeper/guides/traefik-proxy-integration",
  //           "oathkeeper/guides/upgrade",
  //         ],
  //       },
  //       "oathkeeper/reference/api",
  //       {
  //         Reference: [
  //           "oathkeeper/reference/configuration",
  //           "oathkeeper/reference/configuration-editor",
  //           {
  //             "Command Line Interface (CLI)": [
  //               {
  //                 type: "autogenerated",
  //                 dirName: "oathkeeper/cli",
  //               },
  //             ],
  //           },
  //           "oathkeeper/sdk",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "link",
  //     label: "Search",
  //     href: "https://www.ory.sh/docs/search",
  //   },
  // ],
  // api: [
  //   "api/index",
  //   "concepts/personal-access-token",
  //   "ecosystem/api-design",
  //   "api/eventual-consistency",
  //   "concepts/cache",
  //   "reference/api",
  //   {
  //     type: "link",
  //     label: "Search",
  //     href: "https://www.ory.sh/docs/search",
  //   },
  // ],

  // sdk: [
  //   "sdk",
  //   {
  //     type: "category",
  //     label: "Examples",
  //     items: [
  //       {
  //         type: "category",
  //         label: "Ory Identities",
  //         items: ["kratos/sdk/go"],
  //       },
  //       {
  //         type: "category",
  //         label: "Ory Permissions",
  //         items: ["keto/sdk/go", "keto/sdk/python"],
  //       },
  //       {
  //         type: "category",
  //         label: "Ory OAuth2 & OpenID",
  //         items: ["hydra/sdk/go", "hydra/sdk/js"],
  //       },
  //       {
  //         type: "category",
  //         label: "Self-hosted Ory",
  //         items: [
  //           {
  //             type: "category",
  //             label: "Ory Kratos",
  //             items: ["kratos/sdk/overview", "kratos/self-hosted/go"],
  //           },
  //           {
  //             type: "category",
  //             label: "Ory Hydra",
  //             items: [
  //               "hydra/sdk/overview",
  //               "hydra/self-hosted/go",
  //               "hydra/self-hosted/js",
  //             ],
  //           },
  //           {
  //             type: "category",
  //             label: "Ory Keto",
  //             items: ["keto/sdk/overview", "keto/self-hosted/go"],
  //           },
  //           {
  //             type: "category",
  //             label: "Ory Oathkeeper",
  //             items: ["oathkeeper/sdk"],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     type: "link",
  //     label: "Search",
  //     href: "https://www.ory.sh/docs/search",
  //   },
  // ],
}

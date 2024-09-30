const menu = [
  // {
  //   heading: "Use-Case Preview",
  // },
  {
    icon: "cc-alt2",
    text: "Dashboard",
    link: "/crypto",
    newTab: true,
    panel: true,
    subPanel: [
      {
        text: "Dashboard",
        icon: "dashboard",
        link: "/crypto",
      },
      {
        text: "My Account",
        icon: "user-c",
        link: "/crypto/accounts",
      },
      {
        text: "Wallets",
        icon: "wallet-alt",
        link: "/crypto/wallets",
      },
      {
        text: "Buy / Sell",
        icon: "coins",
        link: "/crypto/buy-sell",
      },
      {
        text: "Orders",
        icon: "repeat",
        link: "/crypto/order-history",
      },
      {
        text: "Chats",
        icon: "chat-circle",
        link: "/crypto/chat",
      },
      {
        text: "My Profile",
        icon: "account-setting",
        link: "/crypto/user-profile-regular",
      },
      {
        text: "Additional Pages",
        icon: "files",
        subMenu: [
          {
            text: "Welcome",
            link: "/crypto/welcome",
          },
          {
            text: "KYC - Get Started",
            link: "/crypto/kyc-application",
          },
          {
            text: "KYC - Application Form",
            link: "/crypto/kyc-form",
          },
        ],
      },
    ],
  },
  // { heading: "Dashboard" },
  // {
  //   icon: "bitcoin-cash",
  //   text: "Dashboard",
  //   link: "/",
  // },
  // {
  //   icon: "coins",
  //   text: "Invest Dashboard",
  //   link: "/invest",
  // },
  // {
  //   icon: "cc-alt2",
  //   text: "Sales Dashboard",
  //   link: "/sales",
  // },
  // {
  //   icon: "growth",
  //   text: "Analytics Dashboard",
  //   link: "/analytics",
  // },
  // {
  //   heading: "Pre-built Pages",
  // },
  {
    icon: "tile-thumb",
    text: "Enquiry",
    active: false,
    subMenu: [
      {
        text: "Account Statement",
        link: "/acc_statement",
      },
      {
        text: "Account Balance",
        link: "/acc_summary",
      },
      // {
      //   text: "Exchange Rate",
      //   link: "/project-list",
      // },
      {
        text: "Add Account",
        link: "/my_account",
      },
    ],
  },
  // {
  //   icon: "users",
  //   text: "User Manage",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "User List - Regular",
  //       link: "/user-list-regular",
  //     },
  //     {
  //       text: "User List - Compact",
  //       link: "/user-list-compact",
  //     },
  //     {
  //       text: "User Details - Regular",
  //       link: "/user-details-regular/1",
  //     },
  //     {
  //       text: "User Profile - Regular",
  //       link: "/user-profile-regular",
  //     },
  //     {
  //       text: "User Contact - Card",
  //       link: "/user-contact-card",
  //     },
  //   ],
  // },
  // {
  //   icon: "file-docs",
  //   text: "AML / KYCs",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "KYC List - Regular",
  //       link: "/kyc-list-regular",
  //     },
  //     {
  //       text: "KYC Details - Regular",
  //       link: "/kyc-details-regular/UD01544",
  //     },
  //   ],
  // },
  {
    icon: "tranx",
    text: "Transfer",
    active: false,
    subMenu: [
      {
        text: "Internal Transfer",
        active: false,
        subMenu: [
          {
            text: "Own Account",
            link: "/own_account",
          },
          {
            text: "Third Party",
            link: "/third_party",
          },
        ],
      },
      {
        text: "External Transfer",
        active: false,
        subMenu: [
          {
            text: "Instant Transfer",
            link: "/components/util-border",
          },
          {
            text: "ACH & NRT",
            link: "/components/util-border",
          },
          {
            text: "PAPPS",
            link: "/papps_transfer",
          },
          {
            text: "International Transfers",
            link: "/components/util-border",
          },
          {
            text: "Mobile Money (Momo)",
            link: "/momo_transfer",
          },
        ],
      },
      {
        text: "Bulk Transfers",
        active: false,
        subMenu: [
          {
            text: "To Banks & Mobile Wallets",
            link: "/components/util-border",
          },
        ],
      },

      {
        text: "My Transfer History",
        link: "/transaction-basic",
      },
    ],
  },
  {
    icon: "grid-alt",
    text: "Payment",
    active: false,
    subMenu: [
      {
        text: "Bill Payment",
        link: "/app-messages",
      },
      {
        text: "Payment History",
        link: "/app-chat",
      },
      // {
      //   text: "Mailbox",
      //   link: "/app-inbox",
      // },
      // {
      //   text: "Calendar",
      //   link: "/app-calender",
      // },
      // {
      //   text: "Kanban",
      //   link: "/app-kanban",
      // },
      // {
      //   text: "File Manager",
      //   link: "/app-file-manager",
      //   badge: "new",
      // },
    ],
  },
  // {
  //   icon: "card-view",
  //   text: "Products",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Product List",
  //       link: "/product-list",
  //     },
  //     {
  //       text: "Product Card",
  //       link: "/product-card",
  //     },
  //     {
  //       text: "Product Details",
  //       link: "/product-details/0",
  //     },
  //   ],
  // },
  {
    icon: "file-docs",
    text: "Request",
    active: false,
    subMenu: [
      {
        text: "Cheque Book Request",
        link: "/cheque_request",
      },
      {
        text: "Mobile Banking Request",
        link: "/mobile_banking_request",
      },
      {
        text: "Request History",
        link: "/request_history",
      },
    ],
  },
  {
    icon: "view-col",
    text: "Investment",
    active: false,
    subMenu: [
      {
        text: "Fixed Deposit",
        link: "/fixed_deposit",
      },
      {
        text: "T-Bills",
        link: "/tbills_request",
      },
      {
        text: "History",
        link: "/investment_history",
      },
    ],
  },
  // {
  //   icon: "view-col",
  //   text: "Investment",
  //   link: "/pricing-table",
  // },
  // {
  //   icon: "img",
  //   text: "Image Gallery",
  //   link: "/image-gallery",
  // },
  // {
  //   heading: "Misc Pages",
  // },
  // {
  //   icon: "signin",
  //   text: "Auth Pages",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Login / Signin",
  //       link: "/auth-login",
  //       newTab: true,
  //     },
  //     {
  //       text: "Register / Signup",
  //       link: "/auth-register",
  //       newTab: true,
  //     },
  //     {
  //       text: "Forgot Password",
  //       link: "/auth-reset",
  //       newTab: true,
  //     },
  //     {
  //       text: "Success / Confirm",
  //       link: "/auth-success",
  //       newTab: true,
  //     },
  //   ],
  // },
  // {
  //   icon: "files",
  //   text: "Error Pages",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "404 Classic",
  //       link: "/errors/404-classic",
  //       newTab: true,
  //     },
  //     {
  //       text: "504 Classic",
  //       link: "/errors/504-classic",
  //       newTab: true,
  //     },
  //     {
  //       text: "404 Modern",
  //       link: "/errors/404-modern",
  //       newTab: true,
  //     },
  //     {
  //       text: "504 Modern",
  //       link: "/errors/504-modern",
  //       newTab: true,
  //     },
  //   ],
  // },
  // {
  //   icon: "files",
  //   text: "Other Pages",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Blank / Startup",
  //       link: "/_blank",
  //     },
  //     {
  //       text: "Faqs / Help",
  //       link: "/pages/faq",
  //     },
  //     {
  //       text: "Terms / Policy",
  //       link: "/pages/terms-policy",
  //     },
  //     {
  //       text: "Regular Page - v1",
  //       link: "/pages/regular-v1",
  //     },
  //     {
  //       text: "Regular Page - v2",
  //       link: "/pages/regular-v2",
  //     },
  //   ],
  // },
  // {
  //   heading: "Components",
  // },
  // {
  //   icon: "layers",
  //   text: "Ui Elements",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Alerts",
  //       link: "/components/alerts",
  //     },
  //     {
  //       text: "Accordions",
  //       link: "/components/accordions",
  //     },
  //     {
  //       text: "Avatar",
  //       link: "/components/avatar",
  //     },
  //     {
  //       text: "Badges",
  //       link: "/components/badges",
  //     },
  //     {
  //       text: "Buttons",
  //       link: "/components/buttons",
  //     },
  //     {
  //       text: "Button Group",
  //       link: "/components/button-group",
  //     },
  //     {
  //       text: "Breadcrumbs",
  //       link: "/components/breadcrumbs",
  //     },
  //     {
  //       text: "Cards",
  //       link: "/components/cards",
  //     },
  //     {
  //       text: "Carousel",
  //       link: "/components/carousel",
  //     },
  //     {
  //       text: "Dropdowns",
  //       link: "/components/dropdowns",
  //     },
  //     {
  //       text: "Modals",
  //       link: "/components/modals",
  //     },
  //     {
  //       text: "Pagination",
  //       link: "/components/pagination",
  //     },
  //     {
  //       text: "Popovers",
  //       link: "/components/popovers",
  //     },
  //     {
  //       text: "Progress",
  //       link: "/components/progress",
  //     },
  //     {
  //       text: "Spinner",
  //       link: "/components/spinner",
  //     },
  //     {
  //       text: "Tabs",
  //       link: "/components/tabs",
  //     },
  //     {
  //       text: "Toast",
  //       link: "/components/toast",
  //     },
  //     {
  //       text: "Typography",
  //       link: "/components/typography",
  //     },
  //     {
  //       text: "Tooltips",
  //       link: "/components/tooltips",
  //     },
  //     {
  //       text: "Utilities",
  //       active: false,
  //       subMenu: [
  //         {
  //           text: "Borders",
  //           link: "/components/util-border",
  //         },
  //         {
  //           text: "Colors",
  //           link: "/components/util-colors",
  //         },
  //         {
  //           text: "Display",
  //           link: "/components/util-display",
  //         },
  //         {
  //           text: "Embeded",
  //           link: "/components/util-embeded",
  //         },
  //         {
  //           text: "Flex",
  //           link: "/components/util-flex",
  //         },
  //         {
  //           text: "Text",
  //           link: "/components/util-text",
  //         },
  //         {
  //           text: "Sizing",
  //           link: "/components/util-sizing",
  //         },
  //         {
  //           text: "Spacing",
  //           link: "/components/util-spacing",
  //         },
  //         {
  //           text: "Others",
  //           link: "/components/util-others",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   icon: "dot-box",
  //   text: "Crafted Icons",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "SVG Icon-Exclusive",
  //       link: "/svg-icons",
  //     },
  //     {
  //       text: "Nioicon - HandCrafted",
  //       link: "/nioicon",
  //     },
  //   ],
  // },
  // {
  //   icon: "table-view",
  //   text: "Tables",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Basic Tables",
  //       link: "/table-basic",
  //     },
  //     {
  //       text: "Special Tables",
  //       link: "/table-special",
  //     },
  //     {
  //       text: "DataTables",
  //       link: "/table-datatable",
  //     },
  //   ],
  // },
  // {
  //   icon: "card-view",
  //   text: "Forms",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Form Elements",
  //       link: "/components/form-elements",
  //     },
  //     {
  //       text: "Checkbox Radio",
  //       link: "/components/checkbox-radio",
  //     },
  //     {
  //       text: "Advanced Controls",
  //       link: "/components/advanced-control",
  //     },
  //     {
  //       text: "Input Group",
  //       link: "/components/input-group",
  //     },
  //     {
  //       text: "Form Upload",
  //       link: "/components/form-upload",
  //     },
  //     {
  //       text: "Date Time Picker",
  //       link: "/components/datetime-picker",
  //     },
  //     {
  //       text: "Number Spinner",
  //       link: "/components/number-spinner",
  //     },
  //     {
  //       text: "noUiSlider",
  //       link: "/components/nouislider",
  //     },
  //     {
  //       text: "Form Layouts",
  //       link: "/components/form-layouts",
  //     },
  //     {
  //       text: "Form Validation",
  //       link: "/components/form-validation",
  //     },
  //     {
  //       text: "Wizard Basic",
  //       link: "/components/wizard-basic",
  //     },
  //     {
  //       text: "Rich Editor",
  //       active: false,
  //       subMenu: [
  //         {
  //           text: "Quill",
  //           link: "/components/quill",
  //         },
  //         {
  //           text: "Tinymce",
  //           link: "/components/tinymce",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   icon: "pie",
  //   text: "Charts",
  //   active: false,
  //   subMenu: [
  //     {
  //       text: "Chart Js",
  //       link: "/charts/chartjs",
  //     },
  //     {
  //       text: "Knobs",
  //       link: "/charts/knobs",
  //     },
  //   ],
  // },
  // {
  //   icon: "puzzle",
  //   text: "Widgets",
  //   subMenu: [
  //     {
  //       text: "Card Widgets",
  //       link: "/components/widgets/cards",
  //     },
  //     {
  //       text: "Chart Widgets",
  //       link: "/components/widgets/charts",
  //     },
  //     {
  //       text: "Rating Widgets",
  //       link: "/components/widgets/rating",
  //     },
  //   ],
  // },
  // {
  //   icon: "block-over",
  //   text: "Miscellaneous",
  //   subMenu: [
  //     {
  //       text: "Slick Sliders",
  //       link: "/components/misc/slick-slider",
  //     },
  //     {
  //       text: "JsTree",
  //       link: "/components/misc/jsTree",
  //     },
  //     {
  //       text: "React Toastify",
  //       link: "/components/misc/toastify",
  //     },
  //     {
  //       text: "Sweet Alert",
  //       link: "/components/misc/sweet-alert",
  //     },
  //     {
  //       text: "React DualListBox",
  //       link: "/components/misc/dual-list",
  //     },
  //     {
  //       text: "React Beautiful Dnd",
  //       link: "/components/misc/beautiful-dnd",
  //     },
  //     {
  //       text: "Google Map",
  //       link: "/components/misc/map",
  //     },
  //   ],
  // },
  // {
  //   icon: "text-rich",
  //   text: "Email Template",
  //   link: "/email-template",
  //   active: "false",
  // },
];
export default menu;

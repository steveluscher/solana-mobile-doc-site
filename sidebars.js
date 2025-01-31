/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  documentationSidebar: [
    {
      type: 'html',
      value: 'Getting Started',
      className: 'sidebar-section-header',
    },
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'getting-started/intro',
      },
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/introduction-to-solana',
          label: 'Introduction to Solana'
        },
        { // dApp publishing entrypoint
          type: 'doc',
          label: 'Solana Mobile dApp Store',
          id: 'dapp-publishing/intro',
        },
        {
          type: 'doc',
          id: 'getting-started/web3-and-mobile',
          label: 'Web3 and Mobile'
        },
      ]
    },
    {
      type: 'category',
      label: 'The Solana Mobile Stack',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'link',
          href: '/getting-started/overview#mobile-wallet-adapter',
          label: 'Mobile Wallet Adapter'
        },
        {
          type: 'link',
          href: '/getting-started/overview#seed-vault',
          label: 'Seed Vault'
        },
      ]
    },
    {
      type: 'category',
      label: 'Solana Mobile Tokens',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'getting-started/chapter2-preorder-tokens',
          label: 'Chapter 2 Preorder Token'
        },
        {
          type: 'doc',
          id: 'getting-started/saga-genesis-token',
          label: 'Saga Genesis Token'
        },
      ]
    },
    {
      type: 'doc',
      id: 'getting-started/mobile-dapp-architecture',
      label: 'Mobile dApp Architecture'
    },
    {
      type: 'doc',
      id: 'getting-started/development-setup',
      label: 'Development Setup'
    },


    /* SDK Section **/
    {
      type: 'html',
      value: '<div class="sidebar-divider" />',
    },
    {
      type: 'html',
      value: 'SDK',
      className: 'sidebar-section-header',
    },
    {
      type: 'ref',
      id: 'react-native/overview',
      label: 'React Native'
    },
    {
      type: 'ref',
      id: 'android-native/overview',
      label: 'Kotlin'
    },
    {
      type: 'ref',
      id: 'web/developing-for-web',
      label: 'Web'
    },

    /* Community SDK Section **/
    {
      type: 'html',
      value: '<div class="sidebar-divider" />',
    },
    {
      type: 'html',
      value: 'SDKs (Community)',
      className: 'sidebar-section-header',
    },
    {
      type: 'ref',
      id: 'flutter/overview',
      label: 'Flutter',
    },
    {
      type: 'ref',
      id: 'unity/unity_sdk',
      label: 'Unity',
    },
    {
      type: 'ref',
      id: 'unreal/unreal_sdk',
      label: 'Unreal Engine',
    },
    
     /* Resources Section */
    {
      type: 'html',
      value: '<div class="sidebar-divider" />',
    },
    {
      type: 'html',
      value: 'Resources',
      className: 'sidebar-section-header',
    },
    {
      type: 'doc',
      id: 'sample-apps/sample_app_overview',
      label: 'Sample App Collection',
    },
    { // Reference entrypoint
      type: 'doc',
      label: 'API Reference',
      id: 'reference/overview',
    },
    { // Reference entrypoint
      type: 'link',
      label: 'Seeker',
      href: 'https://solanamobile.com',
    },
    {
      type: 'doc',
      id: 'saga/overview',
      label: 'Saga',
    },
  ],
  // other sidebars
  ...require("./sidebars/kotlinSidebar.js"),
  ...require("./sidebars/reactNativeSidebar.js"),
  ...require("./sidebars/dappStoreSidebar.js"),
  ...require("./sidebars/referenceSidebar.js"),
  ...require("./sidebars/sagaSidebar.js"),
};

module.exports = sidebars;

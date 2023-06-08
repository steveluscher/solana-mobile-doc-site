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
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/intro',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'getting-started/development-setup',
          label: 'Development Setup'
        },
        {
          type: 'doc',
          id: 'getting-started/overview',
          label: 'SMS Overview'
        },
      ],
    },
    {
      type: 'category',
      label: 'React Native SDK',
      collapsible: true,
      items: [
        {
          type: 'doc',
          id: 'react-native/overview',
          label: 'Overview'
        },
        {
          type: 'doc',
          id: 'react-native/setup',
          label: 'Setup'
        },
        {
          type: 'doc',
          id: 'react-native/quickstart',
          label: 'Quickstart'
        },
        {
          type: 'doc',
          id: 'react-native/first_app_tutorial',
          label: 'Build your first dApp'
        },
        {
          type: 'doc',
          id: 'react-native/hello_world_tutorial',
          label: 'Hello World Tutorial'
        },
        {
          type: 'doc',
          id: 'react-native/expo',
          label: 'Developing with Expo'
        },
        {
          type: 'link',
          href: 'https://solana-labs.github.io/solana-web3.js/',
          label: 'web3.js Reference'
        },
      ]
    },
    {
      type: 'category',
      label: 'Android Native SDK',
      collapsible: true,
      items: [
        {
          type: 'doc',
          id: 'android-native/overview',
          label: 'Overview'
        },
        {
          type: 'doc',
          id: 'android-native/setup',
          label: 'Setup'
        },
        {
          type: 'doc',
          id: 'android-native/quickstart',
          label: 'Quickstart'
        },
        {
          type: 'link',
          href: 'https://www.javadoc.io/doc/com.solanamobile/mobile-wallet-adapter-clientlib-ktx/latest/index.html',
          label: 'Kotlin MWA reference'
        },
      ]  
    },
    {
      type: 'category',
      label: 'Additional SDKs',
      collapsible: true,
      items: [
        {
          type: 'doc',
          id: 'additional-sdks/unity_intro',
          label: 'Unity SDK'
        },
        {
          type: 'doc',
          id: 'additional-sdks/flutter_sdk',
          label: 'Flutter SDK'
        },
      ]  
    },
    {
      type: 'doc',
      label: 'Sample App Collection',
      id: 'sample-apps/sample_app_overview',
    },
    {
      type: 'doc',
      label: 'API Reference',
      id: 'reference/overview',
    },
  ],
  // other sidebars
  referenceSidebar: [
    {
        type: 'doc',
        id: 'reference/overview',
        label: 'Overview'
    },
    {
      type: 'category',
      label: 'Typescript',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'reference/typescript/mobile-wallet-adapter',
          label: 'Mobile Wallet Adapter'
        },
        {
          type: 'doc',
          id: 'reference/typescript/web3js',
          label: '@solana/web3.js'
        }
      ]  
    },
    {
      type: 'category',
      label: 'Kotlin',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'reference/kotlin/mobile-wallet-adapter',
          label: 'Mobile Wallet Adapter'
        }
      ]  
    },
  ]
};

module.exports = sidebars;

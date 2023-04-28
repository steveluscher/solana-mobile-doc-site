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
          id: 'getting-started/quickstart',
          label: 'Quickstart'
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
          id: 'react-native/quickstart',
          label: 'Quickstart'
        },
        {
          type: 'doc',
          id: 'react-native/hello_world_tutorial',
          label: 'Hello World Tutorial'
        },
        {
          type: 'doc',
          id: 'react-native/mwa_integration_rn',
          label: 'Integrate with MWA'
        },
        {
          type: 'doc',
          id: 'react-native/expo',
          label: 'Developing with Expo'
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
          id: 'android-native/quickstart',
          label: 'Quickstart'
        },
        {
          type: 'doc',
          id: 'android-native/mwa_integration',
          label: 'Integrate with MWA'
        },
        {
          type: 'link',
          href: 'https://www.javadoc.io/doc/com.solanamobile/mobile-wallet-adapter-clientlib-ktx/latest/index.html',
          label: 'Kotlin MWA Reference'
        },
        {
          type: 'link',
          href: 'https://www.javadoc.io/doc/com.solanamobile/mobile-wallet-adapter-clientlib',
          label: 'Java MWA Reference'
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
      ]  
    },
    {
      type: 'doc',
      label: 'Sample App Collection',
      id: 'sample-apps/sample_app_overview',
    },
  ]
};

module.exports = sidebars;

/* eslint-disable no-unused-vars */
declare module '@pathscale/vue3-ui';

declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}

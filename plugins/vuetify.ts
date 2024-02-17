import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@/assets/scss/main.scss';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: {
          'primary': '#673AB7', // Purple
          'secondary': '#FF5722', // Deep Orange
          accent: '#03A9F4', // Light Blue
          error: '#f44336', // Red
          warning: '#FFC107', // Amber
          info: '#2196F3', // Blue
          success: '#4CAF50', // Green
        },
        dark: {
          primary: '#9C27B0',
          secondary: '#FF9800',
          accent: '#00BCD4',
          error: '#FF5252',
          warning: '#FFC107',
          info: '#03A9F4',
          success: '#8BC34A',
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});

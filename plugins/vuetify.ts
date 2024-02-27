import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@/assets/scss/styles.scss';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme: {
          dark: false,
          colors: {
            primary: '#673AB7', // Purple
            secondary: '#FF5722', // Deep Orange
            accent: '#03A9F4', // Light Blue
            error: '#f44336', // Red
            warning: '#FFC107', // Amber
            info: '#2196F3', // Blue
            success: '#4CAF50', // Green
          },
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});

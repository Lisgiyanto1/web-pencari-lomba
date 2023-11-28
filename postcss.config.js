import tailwindcss from 'tailwindcss';
import posthtmlExpressions from 'posthtml-expressions';

export default {
  plugins: [
    tailwindcss,
    posthtmlExpressions(), // Tambahkan modul posthtml-expressions
  ],
};

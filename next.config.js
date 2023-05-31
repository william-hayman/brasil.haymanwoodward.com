/** @type {import('next').NextConfig} */

const path = require('path')
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    token: 'da39a3ee5e6b4b0d3255bfef95601890afd80709',
//     urlApi: 'http://localhost/api/lead'
    urlApi: 'https://api-events.haymanwoodward.com/api/lead'
  },
  i18n: {
    locales: ['en', 'pt'], // Lista de idiomas suportados
    defaultLocale: 'pt', // Idioma padrão
  },
}

module.exports = nextTranslate(nextConfig)

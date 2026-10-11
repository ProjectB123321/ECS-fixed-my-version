const fs = require('fs');
const path = require('path');

let config = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {}
};

const configPath = path.join(__dirname, 'config.json');
if (fs.existsSync(configPath)) {
  try {
    config = JSON.parse(fs.readFileSync(configPath).toString('utf-8'));
  } catch (e) {
    console.error('config.json okunamadı:', e);
  }
}

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverRuntimeConfig: config.serverRuntimeConfig || {},
  publicRuntimeConfig: config.publicRuntimeConfig || {},
  async redirects() {
    return [
      {
        source: '/catalog.aspx',
        destination: '/catalog',
        permanent: true,
      },
      {
        source: '/groups/:id/:name',
        destination: '/My/Groups.aspx?gid=:id',
        permanent: false,
      },
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config
  },
}

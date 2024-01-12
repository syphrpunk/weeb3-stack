const nextPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: 'loose' },
  transpilePackages: ['d3-scale'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          net: false,
          tls: false,
          fs: false,
        },
      };
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/',
      },
      {
        source: '/app/wagmi-project/:path*',
        destination: '/wagmi',
      },
      {
        source: '/dynamic/:path*',
        destination: '/dynamic',
      },
      {
        source: '/web/:path*',
        destination: '/next',
      }
    ];
  },
};

module.exports = withPlugins(
  [
    [
      nextPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV !== 'production',
          dest: 'public',
          sw: 'service-worker.js',
        },
      },
    ],
  ],
  nextConfig,
);
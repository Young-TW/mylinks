/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'streak-stats.demolab.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-activity-graph.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'osu-sig.vercel.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'quaver.young-tw.com',
        port: '',
        pathname: '/**'
      },
    ]
  }
};

module.exports = nextConfig;

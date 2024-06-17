/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.xoriant.com',
      'dynamicmedia.accenture.com',
      'img.freepik.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;

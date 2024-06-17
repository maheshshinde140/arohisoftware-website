/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com'],
      remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        pathname: 'images.unsplash.com/**',
      },
    ],
    },
    images: {
      domains: ['dynamicmedia.accenture.com'],
    },
    images: {
      domains: ['https://img.freepik.com'],
    }
    
};


export default nextConfig;



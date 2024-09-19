/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  
    swcMinify: true,
    serverComponentsExternalPackages: ['mongoose'],

  },
  images: {
       remotePatterns: [
           {
               protocol: 'https',
               hostname: 'm.media-amazon.com',
           }
       ]
  },  
};

module.exports = nextConfig  
   

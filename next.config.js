/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    formats:['image/webp' ,'image/avif'],
    domains:['res.cloudinary.com']
  }
}

module.exports = nextConfig

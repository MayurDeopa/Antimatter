/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'i.ytimg.com',
      'cdn.chec.io',
      'i.ibb.co'
    ]
  }
}

module.exports = nextConfig

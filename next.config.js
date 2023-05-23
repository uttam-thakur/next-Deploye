module.exports = {
  reactStrictMode: true,
}
 {import("next").NextConfig}

const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  async rewrites(){
    return[
      {
        source: '/',
        destination: '/public/index.html'
      }
    ]
  }

}
import createMDX from '@next/mdx'
import { NextConfig } from 'next'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'awvvhcrihm7n6tuv.public.blob.vercel-storage.com' },
    ],
  },
}

export default withMDX(nextConfig)
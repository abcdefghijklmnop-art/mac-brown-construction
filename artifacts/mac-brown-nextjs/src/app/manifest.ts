import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mac Brown Fly Fish School',
    short_name: 'Mac Brown Fly Fish',
    description: 'Fly fishing guide school and instruction in Western North Carolina.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#003366',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

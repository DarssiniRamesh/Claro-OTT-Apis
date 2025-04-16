/**
 * Mock data for database fallback
 * This module provides mock data for all models when MongoDB is unavailable
 */

/**
 * PUBLIC_INTERFACE
 * Mock data for Asset model
 */
const assets = [
  {
    id: '1',
    title: 'The Matrix Trailer',
    type: 'video',
    url: 'https://example.com/videos/matrix-trailer.mp4',
    format: 'mp4',
    size: 15000000,
    metadata: '1',
    createdAt: new Date('2023-01-15')
  },
  {
    id: '2',
    title: 'Inception Poster',
    type: 'image',
    url: 'https://example.com/images/inception-poster.jpg',
    format: 'jpg',
    size: 2500000,
    metadata: '2',
    createdAt: new Date('2023-02-10')
  },
  {
    id: '3',
    title: 'Breaking Bad Theme',
    type: 'audio',
    url: 'https://example.com/audio/breaking-bad-theme.mp3',
    format: 'mp3',
    size: 5000000,
    metadata: '3',
    createdAt: new Date('2023-03-05')
  }
];

/**
 * PUBLIC_INTERFACE
 * Mock data for Metadata model
 */
const metadata = [
  {
    id: '1',
    title: 'The Matrix',
    description: 'A computer hacker learns about the true nature of reality',
    type: 'movie',
    genre: ['sci-fi', 'action'],
    releaseDate: new Date('1999-03-31'),
    duration: 136,
    rating: 8.7,
    createdAt: new Date('2023-01-10')
  },
  {
    id: '2',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology',
    type: 'movie',
    genre: ['sci-fi', 'action', 'thriller'],
    releaseDate: new Date('2010-07-16'),
    duration: 148,
    rating: 8.8,
    createdAt: new Date('2023-02-05')
  },
  {
    id: '3',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer',
    type: 'series',
    genre: ['drama', 'crime', 'thriller'],
    releaseDate: new Date('2008-01-20'),
    rating: 9.5,
    createdAt: new Date('2023-03-01')
  }
];

/**
 * PUBLIC_INTERFACE
 * Mock data for Navigation model
 */
const navigation = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    icon: 'home',
    order: 1,
    isActive: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: '2',
    title: 'Movies',
    path: '/movies',
    icon: 'film',
    order: 2,
    isActive: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: '3',
    title: 'TV Shows',
    path: '/tv-shows',
    icon: 'tv',
    order: 3,
    isActive: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: '4',
    title: 'My List',
    path: '/my-list',
    icon: 'list',
    order: 4,
    isActive: true,
    createdAt: new Date('2023-01-01')
  },
  {
    id: '5',
    title: 'New & Popular',
    path: '/new',
    icon: 'star',
    order: 5,
    isActive: true,
    createdAt: new Date('2023-01-01')
  }
];

/**
 * PUBLIC_INTERFACE
 * Mock data for User model
 */
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    // Note: In a real application, passwords would be hashed
    password: '$2a$10$XOPbrlUPQdwdJUpSrIF6X.LG1dXgGkFmcpDuL.P0Xzz8ArQG.6Ae6', // 'password123'
    role: 'user',
    createdAt: new Date('2023-01-05')
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: '$2a$10$XOPbrlUPQdwdJUpSrIF6X.LG1dXgGkFmcpDuL.P0Xzz8ArQG.6Ae6', // 'password123'
    role: 'admin',
    createdAt: new Date('2023-01-10')
  }
];

module.exports = {
  assets,
  metadata,
  navigation,
  users
};

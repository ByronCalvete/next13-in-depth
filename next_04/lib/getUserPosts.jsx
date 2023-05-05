export default async function getUserPosts(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } })

  if (!res.ok) return undefined

  return res.json()
}

// This is for SSR -> Server Side Rendering
// fetch('', { cache: 'force-cache' })

// SSG???
// fetch('', { cache: 'no-store' })

// This is for ISR -> Incremental Static Reneration
// fetch('', { next: { revalidate: 60 } })
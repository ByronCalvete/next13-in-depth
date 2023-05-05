export default async function UserPosts({ promise }) {
  const posts = await promise

  return (
    <>
      {posts.map(post => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br/>
          </article>
        )
      })}
    </>
  )
}
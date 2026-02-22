import Article from "./Article"

function ArticleList({ posts }) {
  const safePosts = Array.isArray(posts) ? posts : []

  return (
    <main>
      {safePosts.map(post => (
        <Article key={post.id} post={post} />
      ))}
    </main>
  )
}

export default ArticleList
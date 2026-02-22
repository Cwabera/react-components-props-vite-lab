function Article({ post = {} }) {
  const { title, date, preview } = post

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
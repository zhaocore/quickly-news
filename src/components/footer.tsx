export function Footer() {
  return (
    <>
      <span>MIT LICENSE</span>
      <span>
        <span>NewsNow © 2024 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}

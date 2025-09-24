const Anchor = ({ value, redirect }: { value: string; redirect: string }) => {
  return (
    <a className=' px-4 pt-2 ' href={redirect}>
      {value}
    </a>
  )
}

export default Anchor

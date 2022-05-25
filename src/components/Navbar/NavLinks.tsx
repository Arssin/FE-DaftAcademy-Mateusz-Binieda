
export  function NavLinks() {
  return (
    <ul >
    {['Home', 'About', 'Alert HomeWork', 'Form HomeWork',].map((item) => (
      <li  key={`link-${item}`}>
        <a  href={`${item}`}>
          {item}
        </a>
      </li>
    ))}
  </ul>
  )
}

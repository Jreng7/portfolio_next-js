import Link from 'next/link'
import Image from 'next/image'

const NAV_ITENS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projetos',
    href: '/projects'
  }
]



export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <Image 
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="logo gb dev"
          />
        </Link>

        <nav>
          {NAV_ITENS.map(obj => (
            
          ))}
        </nav>
      </div>
    </header>
  )
}
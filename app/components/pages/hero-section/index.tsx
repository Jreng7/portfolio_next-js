import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <section className="container flex items-center justify-between flex-col-reverse lg:flex-row">
        <article className='w-full lg:max-w-[530px]'>
          <p className='font-mono text-emerald-500'>Olá, meu nome é</p>
          <h2 className='text-4xl font-medium mt-2'>Josué Ribeiro.</h2>
          <p className='text-gray-400 my-6 text-sm sm:text-base'>
            Olá, meu nome é Josué R.S. Jacinto e sou desenvolvedor fullstack ligado na tecnologia. Com mais de 2 anos de experiência.
            meu objetivo é criar interfaces de usuários bonitas e funcionais com um backend sem erros, além de liderar equipes técnicas
            em projetos desafiadores. Estou sempre aberto a novas oportunidades e desafios.
          </p>

          <div>
            techs
          </div>
          <div>
            contato
          </div>
        </article>

        <Image 
          width={420}
          height={404}
          src='/images/profile-pic.png'
          alt='foto de perfil do Josué Ribeiro dos Santos Jacinto.'
        />
      </section>
    </section>
  )
}
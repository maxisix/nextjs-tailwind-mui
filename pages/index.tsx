import type { NextPage } from 'next'
import { Card } from '../components/Card/Card'
import { Container } from '../components/Container/Container'

const Home: NextPage = () => {
  return (
    <div className="">
      <menu className="m-0 p-6 text-right">
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="text-black no-underline"
        >
          Docs
        </a>
      </menu>

      <Container margin>
        <Card
          imageSrc="https://www.fillmurray.com/640/360"
          title="Bill Murray et Sofia Coppola refont équipe"
          buttonLink="google.com"
        />

        <Card
          imageSrc="https://loremflickr.com/640/360"
          title="Les chats de Saskia Thuot"
          buttonLink="google.com"
        />
      </Container>
    </div>
  )
}

export default Home

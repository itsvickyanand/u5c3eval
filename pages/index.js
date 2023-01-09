import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Image width={100} height={100} src={data.avatar_url} alt="broken" />
      <h3>Name:-{data.name}</h3>
      <h3>Location:-{data.location}</h3>
      <h3>Profession:-{data.bio}</h3>
      <h3>Portfolio:-{data.html_url}</h3>
      <h3>
        Tech Stack:-
        <button>HTML</button>
        <button>CSS</button>
        <button>JS</button>
        <button>REACT</button>
        <button>TYPESCRIPT</button>
        <button>NEXT JS</button>
      </h3>
      <h3>
        Education:-
        <ol>
          <li>
            {' '}
            <h5>Full Stack Develeopment@Masai School</h5>
          </li>
          <li>
            {' '}
            <h5>Civil Engineering@DSCE</h5>
          </li>
        </ol>
      </h3>
      <a href="https://drive.google.com/file/d/14VrXM0PiKFchGg1-U_bLGdJTgBJXAHDo/view?usp=share_link">
        {' '}
        <button>Resume</button>
      </a>
    </div>
  )
}

export async function getStaticProps() {
  let username = 'itsvickyanand'
  let res = await fetch(`https://api.github.com/users/${username}`)
  let d = await res.json()
  return {
    props: {
      data: d,
    },
  }
}

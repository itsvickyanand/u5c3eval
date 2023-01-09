import React from 'react'
import Image from 'next/image'
const Pojects = ({ data }) => {
  console.log(data.items)
  return (
    <div>
      <h1>Projects Page</h1>
      {data.items.map((ele) => {
        console.log(ele)
        return (
          <div key={ele.id}>
            <Image
              src={ele.owner.avatar_url}
              width="100"
              height="100"
              alt="broken"
            />
            <h3>Projects name:-{ele.name}</h3>
            <h3>Total commits:-{ele.id}</h3>
            <h3>Langauage used:-{ele.language}</h3>
            <h3>Views:-{ele.size}</h3>
            <a href={ele.html_url}>
              <button>Click to see Project details</button>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Pojects

export async function getStaticProps() {
  let username = 'itsvickyanand'
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`,
  )
  let d = await res.json()
  return {
    props: {
      data: d,
    },
  }
}

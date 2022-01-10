import type { NextPage } from 'next'
import Header from '../components/Header'
import UserInput from '../components/UserInput'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.scss'
import { defaultProfiles } from '../utils'

import { useState } from 'react'

const Home: NextPage = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);
  // setTimeout(() => {
  //   setProfiles([...profiles, defaultProfiles[0]])
  // }, 500);
  return (
    <div>
      <Header />
      <UserInput />
      <CardList profiles={profiles} />
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Header from '../components/Header'
import UserInput from '../components/UserInput'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.scss'
import { defaultProfiles } from '../utils'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <UserInput />
      <CardList profiles={defaultProfiles} />
    </div>
  )
}

export default Home

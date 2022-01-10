import type { NextPage } from 'next'
import Header from '../components/Header'
import UserInput from '../components/UserInput'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.scss'
import { defaultProfiles } from '../utils'
import { profileType } from '../utils'

import { useState, useContext, createContext } from 'react'

type GlobalProfileContextTypes = [profileType[], (p: profileType[]) => void]

const ProfilesContext = createContext<GlobalProfileContextTypes>([defaultProfiles, (p: profileType[]) => { }])

export const useProfileContext = () => useContext(ProfilesContext);

const Home: NextPage = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);

  return (
    <ProfilesContext.Provider value={[profiles, setProfiles]}>
      <div>
        <Header />
        <UserInput />
        <CardList />
      </div>
    </ProfilesContext.Provider>
  )
}

export default Home

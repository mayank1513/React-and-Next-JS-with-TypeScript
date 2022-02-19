import type { NextPage } from 'next'
import Header from '../components/Header'
import UserInput from '../components/UserInput'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.scss'
import { defaultProfiles } from '../utils'
import { profileType } from '../utils'

import Head from 'next/head'

import { useState, useContext, createContext } from 'react'

type GlobalProfileContextTypes = [profileType[], (p: profileType[]) => void]

const ProfilesContext = createContext<GlobalProfileContextTypes>([defaultProfiles, (p: profileType[]) => { }])

export const useProfileContext = () => useContext(ProfilesContext);

const Home: NextPage = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);

  return (
    <ProfilesContext.Provider value={[profiles, setProfiles]}>
      <Head>
        <meta name="description" content="This is a sample app used to teach React JS functional componets and hooks." />
        <title>GitHub Cards App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <div>
        <Header />
        <UserInput />
        <CardList />
      </div>
    </ProfilesContext.Provider>
  )
}

export default Home

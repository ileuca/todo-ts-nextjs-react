import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tasks from './tasks'

const Home: NextPage = () => {
  return (
      <Tasks/>
  )
}

export default Home

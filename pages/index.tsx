import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Tasks from './tasks'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks</title>
      </Head>
      <Link href="/tasks">
        <div className={styles.title}>
          <a>Go To the Tasks Page</a>
        </div>
      </Link>
      <Link href={`/task/id`}>
        <div className={styles.title}>
          <a>Go To specific Task Page</a>
        </div>
      </Link>
      <Link href={`/task/create`}>
        <div className={styles.title}>
          <a>Go To create Task Page</a>
        </div>
      </Link>
    </div>
  )
}

export default Home

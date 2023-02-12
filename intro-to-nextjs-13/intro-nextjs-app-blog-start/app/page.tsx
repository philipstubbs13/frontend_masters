import Link from 'next/link';
import styles from '../styles/home.module.css';

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <div>
          <h1>Hi, my name is Scott Moss!</h1>
        </div>
        <div>
          <Link href="/blog">Check out my Blog</Link>
        </div>
        <div>
          <Link href="/contact">Contact Me</Link>
        </div>
      </div>
    </div>
  )
}

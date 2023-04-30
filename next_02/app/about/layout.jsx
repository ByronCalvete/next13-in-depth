import styles from './styles.module.css'

export const metadata = {
  title: 'About Page',
  description: 'Created by Byron J Calvete'
}

export default function AboutLayout({ children }) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

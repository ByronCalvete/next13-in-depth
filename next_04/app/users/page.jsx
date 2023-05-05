import Link from 'next/link'
import getAllUsers from '@/lib/getAllUsers'

export const metadata = {
  title: 'Users',
  description: 'Created by Byron J Calvete'
}

export default async function Users() {
  const usersData = getAllUsers()
  const users = await usersData

  return (
    <>
      <h2>
        <Link href="/">Back to home page</Link>
      </h2>
      <br/>
      {users.map(user => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br/>
          </>
        )
      })}
    </>
  )
}

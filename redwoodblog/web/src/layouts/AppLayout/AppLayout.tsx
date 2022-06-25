// import { Link } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import './AppLayout.css'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="catalog__app-layout-header">
        <div className="flex-between">
          {isAuthenticated ? (
            <div>
              <span>
                Logged in as {currentUser.email} ({currentUser.roles}){' '}
              </span>
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AppLayout

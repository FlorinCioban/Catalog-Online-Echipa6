// import { Link } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import './AppLayout.css'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()

  return (
    <>
      <header className="catalog__app-layout-header">
        <div className="rw-button-group">
          {hasRole(["superadmin", "admin"]) && (
            <Link to={routes.users()}>
              <button className="rw-button rw-button-blue">
                Users
              </button>
            </Link>

          )}
          {hasRole(["superadmin", "admin", "teacher"]) && (
            <Link to={routes.grades()}>
              <button className="rw-button rw-button-blue">
                Grades
              </button>
            </Link>

          )}
          <div className="user-info push"></div>
          {isAuthenticated ? (
            <>
              <span>
                Logged in as {currentUser.email} ({currentUser.roles}){' '}
              </span>
              <button type="button" className="rw-button rw-button-blue" onClick={logOut}>
                Logout
              </button>
            </>
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

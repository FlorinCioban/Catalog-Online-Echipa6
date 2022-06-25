// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import UsersLayout from 'src/layouts/UsersLayout'

import GradesLayout from 'src/layouts/GradesLayout'

import AppLayout from './layouts/AppLayout/AppLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AppLayout}>

        <Private unauthenticated="login" roles={["superadmin", "admin"]}>
          <Set wrap={UsersLayout}>
            <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
            <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
            <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
            <Route path="/admin/users" page={UserUsersPage} name="users" />
          </Set>
        </Private>
        <Route path="/login" page={LoginPage} name="login" />

        <Private unauthenticated="login" roles={["superadmin", "admin"]}>
          <Route path="/signup" page={SignupPage} name="signup" />
        </Private>

        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Private unauthenticated="login" roles={["superadmin", 'teacher', 'admin']}>
          <Set wrap={GradesLayout}>
            <Route path="/teacher/grades/new" page={GradeNewGradePage} name="newGrade" />
            <Route path="/teacher/grades/{id:Int}/edit" page={GradeEditGradePage} name="editGrade" />
            <Route path="/teacher/grades/{id:Int}" page={GradeGradePage} name="grade" />
            <Route path="/teacher/grades" page={GradeGradesPage} name="grades" />
          </Set>
        </Private>
        <Private unauthenticated="login" roles={["superadmin", "student"]}>
          <Route path="/student-home" page={StudentHomePage} name="studentHome" />
        </Private>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes

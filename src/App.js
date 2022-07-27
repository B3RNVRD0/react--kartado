import * as React from 'react'
import { Admin, Resource, ListGuesser, Layout } from 'react-admin'
import { MyAppBar } from './appBar'
import { PostList, PostEdit, PostCreate } from './posts'
//import { BookList, BookShow } from './book'
import { EditComment, CommentShow } from './comments'
import Comments from './comments'
import { UserList } from './users'
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'
//import RentalCreate from './rental/RentalCreate'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
//import RentalEdit from './rental/RentalEdit'
//import RentalList from './rental/RentalCreate'
//import { CustomerList } from './CustomerList'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const MyLayout = props => <Layout {...props} appBar={MyAppBar} />

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="comments"
      list={Comments}
      edit={EditComment}
      show={CommentShow}
    />

    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)

export default App
/*   
<Resource name="book" list={BookList} show={BookShow} />
     <Resource name="CustomerList" list={CustomerList} />
  
     <Resource
      name="rentals"
      create={RentalCreate}
      list={RentalList}
      edit={RentalEdit}
    />
 */

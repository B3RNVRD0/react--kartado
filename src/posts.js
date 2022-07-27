import * as React from 'react'

import {
  useMediaQuery,
  Stack,
  Button,
  Toolbar,
  Card,
  Typography
} from '@mui/material'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  SimpleList,
  ReferenceInput,
  SelectInput,
  TextInput,
  useListContext
} from 'react-admin'

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users">
    <SelectInput optionText="name" />
  </ReferenceInput>
]
const PostPagination = () => {
  const { page, hasPreviousPage, hasNextPage, setPage } = useListContext()
  if (!hasPreviousPage && !hasNextPage) return null
  return (
    <Toolbar>
      {hasPreviousPage && (
        <Button
          key="previous"
          onClick={() => setPage(page - 1)}
          startIcon={<ChevronLeft />}
        >
          Previous
        </Button>
      )}
      {hasNextPage && (
        <Button
          key="next"
          onClick={() => setPage(page + 1)}
          startIcon={<ChevronRight />}
        >
          Next
        </Button>
      )}
    </Toolbar>
  )
}
export const PostList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
  return (
    <List {...props} filters={postFilters} pagination={<PostPagination />}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
}

const PostTitle = ({ record }) => {
  return <span>posts {record ? `"${record.title}"` : ''}</span>
}

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
)
export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
)

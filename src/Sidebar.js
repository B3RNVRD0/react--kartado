/* import * as React from 'react'
import { useState } from 'react'
import {
  Title,
  useGetList,
  Datagrid,
  ListContextProvider,
  FilterForm,
  useListContext,
  Pagination,
  List,
  TextInput
} from 'react-admin'
import {
  TextField,
  Button,
  Toolbar,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@mui/material'
import { Card } from '@mui/material'
import { Menu, MenuItem, Tooltip, IconButton } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useListSortContext, useTranslate } from 'react-admin'
import { Link } from 'react-router-dom'
import { stringify } from 'query-string'
import App from './App'

const SortByViews = () => (
  <Button
    color="primary"
    component={Link}
    to={{
      pathname: '/posts',
      search: stringify({
        page: 1,
        perPage: 25,
        sort: 'nb_views',
        order: 'DESC',
        filter: {}
      })
    }}
  >
    Sort by views
  </Button>
)

const filters = [<TextInput label="Search" source="q" size="small" alwaysOn />]

const BookList = () => (
  <List filters={filters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="year" />
    </Datagrid>
  </List>
)

const SortButton = ({ fields }) => {
  // sort is an object { field, order } containing the current sort
  // setSort is a callback ({ field, order }) => void allowing to change the sort field and order
  const { sort, setSort } = useListSortContext()
  // rely on the translations to display labels like 'Sort by sales descending'
  const translate = useTranslate()
  // open/closed state for dropdown
  const [anchorEl, setAnchorEl] = React.useState(null)

  // mouse handlers
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleChangeSort = event => {
    const field = event.currentTarget.dataset.sort
    setSort({
      field,
      order: field === sort.field ? inverseOrder(sort.order) : 'ASC'
    })
    setAnchorEl(null)
  }

  // English stranslation is 'Sort by %{field} %{order}'
  const buttonLabel = translate('ra.sort.sort_by', {
    field: translate(`resources.products.fields.${sort.field}`),
    order: translate(`ra.sort.${sort.order}`)
  })

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
        startIcon={<SortIcon />}
        endIcon={<ArrowDropDownIcon />}
        size="small"
      >
        {buttonLabel}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {fields.map(field => (
          <MenuItem
            onClick={handleChangeSort}
            // store the sort field in the element dataset to avoid creating a new click handler for each item (better for performance)
            data-sort={field}
            key={field}
          >
            {translate(`resources.products.fields.${field}`)}{' '}
            {translate(
              `ra.sort.${
                sort.field === field ? inverseOrder(sort.order) : 'ASC'
              }`
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

const inverseOrder = sort => (sort === 'ASC' ? 'DESC' : 'ASC')

export default SortButton */

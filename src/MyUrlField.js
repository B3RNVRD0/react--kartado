import * as React from 'react'
import { useRecordContext } from 'react-admin'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  link: {
    textDecoration: 'none'
  },
  icon: {
    width: '0.5em',
    height: '0.5em',
    paddingLeft: 2
  }
})

const MyUrlField = ({ source }) => {
  const record = useRecordContext()
  const classes = useStyles()
  return record ? (
    <a href={record[source]} className={classes.link}>
      {record[source]}
    </a>
  ) : null
}

export default MyUrlField

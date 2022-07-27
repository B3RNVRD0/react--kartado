import {
  SimpleShowLayout,
  Show,
  Labeled,
  DateField,
  WithRecord
} from 'react-admin'
import { Stack, Typography } from '@mui/material'

import { List, TextField, useListContext } from 'react-admin'

import StarIcon from '@mui/icons-material/Star'
import { Grid } from '@mui/material'

export const BookList = () => (
  <List emptyWhileLoading>
    <SimpleBookList />
  </List>
)

export const BookShow = () => (
  <Show emptyWhileLoading>
    <Grid container spacing={2} sx={{ margin: 2 }}>
      <Grid item xs={12} sm={8}>
        <SimpleShowLayout>
          <TextField label="Title" source="title" />
          <DateField label="Publication Date" source="published_at" />
          <WithRecord
            label="Rating"
            render={record => (
              <>
                {[...Array(record.rating)].map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </>
            )}
          />
        </SimpleShowLayout>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography>Details</Typography>
        <Stack spacing={1}>
          <Labeled label="ISBN">
            <TextField source="isbn" />
          </Labeled>
          <Labeled label="Last rating">
            <DateField source="last_rated_at" />
          </Labeled>
        </Stack>
      </Grid>
    </Grid>
  </Show>
)

const SimpleBookList = () => {
  const { data } = useListContext()
  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      {data.map(book => (
        <Typography key={book.id}>
          <i>{book.title}</i>, by {book.author} ({book.year})
        </Typography>
      ))}
    </Stack>
  )
}

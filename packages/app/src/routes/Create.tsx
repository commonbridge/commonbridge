import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PageTitle } from '@commonbridge/components'
import { getIntegrations } from '../createApp'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid'

export function Create() {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const defaultFrom = searchParams.get('from')
  const defaultTo = searchParams.get('to')

  const [fromValue, setFromValue] = useState(defaultFrom || '')
  const [toValue, setToValue] = useState(defaultTo || '')
  const integrations = getIntegrations()

  const onFromChange = (e: any) => {
    const value = e.target.value
    setFromValue(value)
    setSearchParams({})
  }

  const onToChange = (e: any) => {
    const value = e.target.value
    setToValue(value)
    setSearchParams({})
  }

  return (
    <>
      <PageTitle title="Create a New Bridge" />
      {integrations && integrations.length > 0 ? (
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <FormControl fullWidth variant="filled">
              <InputLabel id="bridge-from-label">Bridge from</InputLabel>
              <Select
                labelId="bridge-from-label"
                id="bridge-from-select"
                value={fromValue}
                label="Bridge from"
                onChange={onFromChange}
              >
                {integrations.map((integration, i: number) => {
                  const details = integration.getDetails()

                  return <MenuItem value={details.id} key={i}>{details.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth variant="filled">
              <InputLabel id="bridge-to-label">Bridge to</InputLabel>
              <Select
                labelId="bridge-to-label"
                id="bridge-to-select"
                value={toValue}
                label="Bridge to"
                onChange={onToChange}
              >
                {integrations.map((integration, i: number) => {
                  const details = integration.getDetails()

                  return <MenuItem value={details.id} key={i}>{details.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
          {fromValue && toValue && (
            <Grid item>
              <Button variant="contained" component={Link} to={`/create/${fromValue}~${toValue}`}>Next</Button>
            </Grid>
          )}
        </Grid>
      ) : (
        <p>No integrations activated.</p>
      )}
    </>
  )
}

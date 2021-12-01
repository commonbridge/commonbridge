import { useParams } from 'react-router-dom'
import { PageTitle } from '@commonbridge/components'
import { getIntegration } from '../createApp'
import { NotFound } from './NotFound'

export function CreateSelected() {
  const { from, to } = useParams()
  if (!from || !to) return <NotFound />

  const fromInt = getIntegration(from)
  const toInt = getIntegration(to)

  if (!fromInt || !toInt) return <NotFound />

  const fromDetails = fromInt.getDetails()
  const toDetails = toInt.getDetails()

  return (
    <>
      <PageTitle title={`${fromDetails.name} to ${toDetails.name}`} />
      <p>From: {fromDetails.name}</p>
      <p>To: {toDetails.name}</p>
    </>
  )
}

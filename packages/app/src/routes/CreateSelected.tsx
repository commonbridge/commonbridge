import { useParams } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'

export function CreateSelected() {
  const { from, to } = useParams()
  return (
    <>
      <PageTitle title="Create" />
      <p>{from}</p>
      <p>{to}</p>
    </>
  )
}

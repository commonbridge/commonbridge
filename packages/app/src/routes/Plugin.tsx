import { PageTitle } from '../components/PageTitle'

export function Plugin(plugin: any) {
  console.log(plugin)
  return (
    <PageTitle title="Plugin" />
  )
}

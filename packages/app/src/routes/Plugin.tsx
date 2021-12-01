import { PageTitle } from '@commonbridge/components'

export function Plugin(plugin: any) {
  console.log(plugin)
  return (
    <PageTitle title="Plugin" />
  )
}

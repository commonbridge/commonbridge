export const replaceVariable = (string: string, variableName: string, replace: string) => {
  const array = string.split(`{{${variableName}}}`)

  return array.join(replace)
}

import { useEffect, useState, createContext, useContext } from 'react'

export const AuthContext = createContext({
  user: null,
  session: null,
})

export const AuthContextProvider = (props: any) => {
  const [session] = useState()
  const [user] = useState()

  useEffect(() => {
    
  }, [])

  const value = {
    session,
    user,
  }

  return <AuthContext.Provider value={value} {...props} />
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthContextProvider.`)
  }
  return context
}

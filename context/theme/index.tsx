import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext([] as any)

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<boolean>(false)
  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContext')
  }
  return context
}

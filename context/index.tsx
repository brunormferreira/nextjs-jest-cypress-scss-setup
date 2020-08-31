import { ThemeProvider } from '../context/theme'

type Props = {
  children: React.ReactNode
}

const AppProviders = ({ children }: Props) => (
  <ThemeProvider>{children}</ThemeProvider>
)

export default AppProviders

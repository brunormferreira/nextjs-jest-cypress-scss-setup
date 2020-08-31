import { FC } from 'react'

type Props = {
  type: string | any
  onClick: (event: React.ChangeEvent) => void
  className?: string
  children: string | React.ReactChildren
}

const Button: FC<Props> = ({ className, type, children }: Props) => (
  <button type={type} className={className}>
    {children}
  </button>
)

export default Button

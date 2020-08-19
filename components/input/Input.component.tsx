import React, { FC } from 'react'

import styles from './Input.module.scss'

type Props = {
  type: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  placeholder: string
  value: string | number
}

const Input: FC<Props> = ({
  type,
  onChange,
  name,
  placeholder,
  value,
}: Props): JSX.Element => (
  <input
    type={type}
    name={name}
    value={value}
    className={styles.input}
    onChange={onChange}
    placeholder={placeholder}
    data-testid="input-component"
  />
)

export default Input

import { useEffect } from 'react'
import { useState } from 'react'

type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>
    | undefined
    | null

export function usePermanentState<T extends JSONValue>(name: string, defaultValue: T): [boolean, T, React.Dispatch<React.SetStateAction<T>>] {
  const [isReady, setIsReady] = useState<boolean>(false)
  const [value, setValue] = useState<T>(defaultValue)

  useEffect(() => {
    const storedValue = localStorage.getItem(name)
    if (storedValue) {
      setValue(JSON.parse(storedValue))
    }

    setIsReady(true)
  }, [name])

  useEffect(() => {
    if (isReady) {
      localStorage.setItem(name, JSON.stringify(value))
    }
  }, [name, value, isReady])

  return [isReady, value, setValue]
}

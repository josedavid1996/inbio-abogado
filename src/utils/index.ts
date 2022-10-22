/* eslint-disable no-useless-escape */
export const isServer = () => typeof window === 'undefined'

export const isEmpty = (v?: string) => v?.trim().length === 0

// eslint-disable-next-line promise/param-names
export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const classNames = (cln: Array<string | undefined>) => {
  return cln.join(' ').trim()
}

export const isEmail = (email?: string) => {
  const regEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
  return regEmail.test(email ?? '')
}

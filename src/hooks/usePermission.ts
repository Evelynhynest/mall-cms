import { useLoginStore } from '@/stores/login/login'

export function usePermission(pageName: string, handleName: string) {
  const loginStore = useLoginStore()
  const verifyPermission = `system:${pageName}:${handleName}`
  return loginStore.permissions.includes(verifyPermission)
  // return !!loginStore.permissions.find(
  //   (item: string) => item === verifyPermission
  // )
}

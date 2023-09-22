import { useAuth } from '@/composables/states'
import { useUserStore as useOptionUserStore } from '~/stores/user'
import { useUserStore as useSetupUserStore } from '~/stores/userSetup'

import { decodeUnicode } from '@/utils/base64'

export default defineNuxtRouteMiddleware((to) => {
  console.log(
    '🚀 ~ file: auth.global.ts:9 ~ defineNuxtRouteMiddleware ~ process.server:',
    process.server
  )
  const { token } = to.query

  // composable
  const { setUserInfo } = useAuth()

  // Options Store
  const optionUserStore = useOptionUserStore()

  // Setup Store
  const setupUserStore = useSetupUserStore()

  // 토큰이 있을 경우 사용자 정보를 설정한다.mi
  if (token) {
    try {
      const jsonToken = decodeUnicode(token as string)
      const parsedToken = JSON.parse(jsonToken)
      setUserInfo(parsedToken)
      optionUserStore.setUserInfo(parsedToken)
      setupUserStore.setUserInfo(parsedToken)
    } catch (err) {
      console.error('token parse 에러 발생')
    }
  }
})

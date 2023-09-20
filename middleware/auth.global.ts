import { useAuth } from '@/composables/states'
import { useUserByOptionsStore } from '~/stores/userByOptions'
import { useUserBySetupStore } from '~/stores/userBySetup'
import { decodeUnicode } from '@/utils/base64'

export default defineNuxtRouteMiddleware((to) => {
  if (process.server) {
    const { token } = to.query

    // composable
    const { userInfo, setUserInfo } = useAuth()

    // Options Store
    const { setUserInfo: setUserInfoFromOptions } = useUserByOptionsStore()

    // Setup Store
    const { setUserInfo: setUserInfoFromSetup } = useUserBySetupStore()

    // 토큰이 있을 경우 사용자 정보를 설정한다.mi
    if (token) {
      try {
        console.log(
          '🚀 ~ file: auth.global.ts:27 ~ defineNuxtRouteMiddleware ~ userInfo:',
          userInfo
        )
        const jsonToken = decodeUnicode(token as string)
        const parsedToken = JSON.parse(jsonToken)
        setUserInfo(parsedToken)
      } catch (err) {
        console.error('token parse 에러 발생')
      }
    }
  }
})

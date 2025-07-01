// PATH: vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true, // <- test, expect 등 전역 사용 가능하게 설정
        environment: 'node', // 또는 'jsdom' (브라우저 환경이 필요한 경우)
        include: ['src/**/*.test.ts'], // 테스트 파일 경로 설정
    },
})

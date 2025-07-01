import { expect, test } from 'vitest'
import converter from './index'

test('영어를 한글로 바꾼다', () => {
    expect(converter('dkssudgktpdy')).toBe('안녕하세요')
})

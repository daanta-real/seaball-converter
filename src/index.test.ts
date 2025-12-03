import { describe, it, expect } from 'vitest';
import { hangulify, englishify } from './index';

// 영타 to 한글 test
describe('hangulify', () => {
    it('영타를 한글로 변환', () => {
        expect(hangulify('dkssudgktpdy')).toBe('안녕하세요');
    });

    it('빈 문자열 처리', () => {
        expect(hangulify('')).toBe('');
    });

    it('혼합 입력 처리 (영문 + 한글)', () => {
        expect(hangulify('dkssudgktpdy123')).toBe('안녕하세요123');
    });

    it('특수문자 통과', () => {
        expect(hangulify('dkssudgktpdy!')).toBe('안녕하세요!');
    });
});

// 한타 to 영문 test
describe('englishify', () => {
    it('한글을 영타로 변환', () => {
        expect(englishify('안녕하세요')).toBe('dkssudgktpdy');
    });

    it('빈 문자열 처리', () => {
        expect(englishify('')).toBe('');
    });

    it('혼합 입력 처리 (한글 + 숫자)', () => {
        expect(englishify('안녕하세요123')).toBe('dkssudgktpdy123');
    });

    it('특수문자 통과', () => {
        expect(englishify('안녕하세요!')).toBe('dkssudgktpdy!');
    });

    it('쌍방향 변환 (한글 → 영타 → 한글)', () => {
        const original = '안녕하세요';
        const toEnglish = englishify(original);
        const backToKorean = hangulify(toEnglish);
        expect(backToKorean).toBe(original);
    });

});

/**
 * PATH: /src/index.ts
 */
import * as Hangul from 'hangul-js';

// 키맵 정의
const engToKorMap: { [key: string]: string } = {
    q: 'ㅂ', w: 'ㅈ', e: 'ㄷ', r: 'ㄱ', t: 'ㅅ',
    y: 'ㅛ', u: 'ㅕ', i: 'ㅑ', o: 'ㅐ', p: 'ㅔ',
    a: 'ㅁ', s: 'ㄴ', d: 'ㅇ', f: 'ㄹ', g: 'ㅎ',
    h: 'ㅗ', j: 'ㅓ', k: 'ㅏ', l: 'ㅣ',
    z: 'ㅋ', x: 'ㅌ', c: 'ㅊ', v: 'ㅍ', b: 'ㅠ',
    n: 'ㅜ', m: 'ㅡ',
    Q: 'ㅃ', W: 'ㅉ', E: 'ㄸ', R: 'ㄲ', T: 'ㅆ',
    O: 'ㅒ', P: 'ㅖ',
    A: 'ㅁ', S: 'ㄴ', D: 'ㅇ', F: 'ㄹ', G: 'ㅎ',
    H: 'ㅗ', J: 'ㅓ', K: 'ㅏ', L: 'ㅣ',
    Z: 'ㅋ', X: 'ㅌ', C: 'ㅊ', V: 'ㅍ', B: 'ㅠ',
    N: 'ㅜ', M: 'ㅡ',
};

// 역방향 맵 생성 (한글 자모 -> 영문)
const korToEngMap: { [key: string]: string } = Object.entries(engToKorMap)
    .reduce((acc, [eng, kor]) => {
        if (!acc[kor]) acc[kor] = eng;
        return acc;
    }, {} as { [key: string]: string });

/**
 * (v1.0.0 ~ )영문 자판 오타를 한글로 변환
 * @param input 영문으로 잘못 입력된 한글 (e.g., 'dkssudgktpdy')
 * @returns 올바른 한글 (e.g., '안녕하세요')
 */
export const hangulify = (input: string): string => {
    if (!input) return '';

    const jamos = input
        .split('')
        .map(char => engToKorMap[char] ?? char)
        .join('');

    return Hangul.assemble(Hangul.disassemble(jamos));
};

/**
 * (v1.0.4 ~ )한글을 영문 자판 표기로 변환
 * @param input 한글 (e.g., '안녕하세요')
 * @returns 영문 자판 표기 (e.g., 'dkssudgktpdy')
 */
export const englishify = (input: string): string => {
    if (!input) return '';

    return Hangul.disassemble(input)
        .map(char => korToEngMap[char] ?? char)
        .join('');

};

// 기존 방식 유지 (backward compatibility)
// 기존대로 그냥 import하면 hangulify를 import할 수 있음
export default hangulify;

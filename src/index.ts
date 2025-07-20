/**
 * PATH: /src/index.ts
 */
import * as Hangul from 'hangul-js';

export default (input: string): string => {

    // 입력 없으면 그냥 냉무 회신
    if (input === null || typeof input === 'undefined' || input === "") {
        return '';
    }
    
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
    
    // Step 1: 영문 -> 한글 자모 치환
    const jamos = input
        .split('')
        .map(char => engToKorMap[char] ?? char)
        .join('');

    // Step 2: 자모 -> 완성형 한글 자동 조합
    return Hangul.assemble(Hangul.disassemble(jamos));

}

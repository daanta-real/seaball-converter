# ⚓ seaball-converter - 영타 ↔ 한글 변환 함수 미니모듈

## 📌 소개

- 키보드 영문 모드에서 타이핑한 오타를 올바른 한글로 바꿔주는 함수 라이브러리
- e.g.) 'dkssudgktpdy' ↔ '안녕하세요'로 쌍방향 변환 가능
- **✨ NEW(v1.0.4~) ✨** 한글을 영문 자판 표기로 역변환하는 기능 추가

※ 이 모듈은 예전에 개발이 중단된 `hangul-js` 라이브러리를 랩핑(Wrapping)해서 만든 것임. 더 섬세한 기능이 필요하면 **`es-hangul`** (https://github.com/kimyihyup/es-hangul) 라이브러리를 추천

## 🛠️ 설치

```bash
# npm 환경
npm install seaball-converter
# yarn 환경
yarn add seaball-converter
```

## 🚀 사용

### 영타 → 한글 (hangulify)

**ES Modules 방식** - 기존 방법 유지됨

```typescript
import seaballConverter from 'seaball-converter';

const wronglyTypedKorean = 'dkssudgktpdy';
const correctedKorean = seaballConverter(wronglyTypedKorean);

// >>> correctedKorean 결과: 안녕하세요
```

**명시적 named import** - 권장 (새 함수와 구분하려면)

```typescript
import { hangulify } from 'seaball-converter';

const result = hangulify('dkssudgktpdy'); // 안녕하세요
```

### 한글 → 영타 (englishify) ✨ NEW (v1.0.4~)

```typescript
import { englishify } from 'seaball-converter';

const korean = '안녕하세요';
const englishTyped = englishify(korean);

// >>> englishTyped 결과: dkssudgktpdy
```

**CommonJS 방식** (Node.js 구형 환경)

```javascript
const { hangulify, englishify } = require('seaball-converter');

hangulify('dkssudgktpdy');  // 안녕하세요
englishify('안녕하세요');    // dkssudgktpdy
```

## 📜 명세 (API)

```typescript
// 영타 → 한글 변환
hangulify(input: string): string
- input: (필수) 영문 자판으로 잘못 입력된 한글 문자열
- 반환값: 올바르게 변환된 한글 문자열

// 한글 → 영타 변환
englishify(input: string): string
- input: (필수) 한글 문자열
- 반환값: 영문 자판 표기로 변환된 문자열

// 기본 export (backward compatibility)
export default hangulify
```

## 🔄 마이그레이션 가이드

**기존 코드는 그대로 동작합니다:**

```typescript
// v1.0.x (기존 방식)
import seaballConverter from 'seaball-converter';
seaballConverter('dkssudgktpdy'); // 계속 작동 ✅
```

**새 함수를 사용하려면:**

```typescript
// v1.0.4~ (새 방식)
import { hangulify, englishify } from 'seaball-converter';

hangulify('dkssudgktpdy');   // 안녕하세요
englishify('안녕하세요');     // dkssudgktpdy
```

---
# 감사합니다
Made with ❤️ by Daanta

# ⚓ seaball-converter - 영타 → 한글 변환 함수 미니모듈

## 📌 소개

- 키보드 영문 모드에서 타이핑한 오타를 올바른 한글로 바꿔주는 단일 함수 라이브러리
- e.g.) 'dkssudgktpdy' → '안녕하세요'로 변환해줌
- 단일 함수 구조라서 깔끔함

※ 이 모듈은 예전에 개발이 중단된 `hangul-js` 라이브러리를 랩핑(Wrapping)해서 반쯤 테스트용으로 만든 것임. 단일 기능에 집중해서 만들었으니 혹시 더 섬세하고 다양한 기능이 필요하면 **`es-hangul`** (https://github.com/kimyihyup/es-hangul) 라이브러리를 추천

## 🛠️ 설치

```bash
# npm 환경
npm install seaball-converter
# yarn 환경
yarn add seaball-converter
```

## 🚀 사용

진짜 간단함 그냥 함수 하나니까 불러서 쓰면 됨 (Node.js, TypeScript 동일)

**ES Modules 방식**

대부분의 경우 이렇게 쓰면 됨

```typescript
import seaballConverter from 'seaball-converter';

const wronglyTypedKorean = 'dkssudgktpdy';
const correctedKorean = seaballConverter(wronglyTypedKorean);

// >>> correctedKorean 결과: 안녕하세요
```

**CommonJS 방식**

package.json에 "type": "module" 설정이 없거나 좀 더 예전 Node.js 환경에서 쓴다면 이렇게 쓰면 됨

```javascript
const seaballConverter = require('seaball-converter');

const wronglyTypedKorean = 'dkssudgktpdy';
const correctedKorean = seaballConverter(wronglyTypedKorean);

// >>> correctedKorean 결과: 안녕하세요
```

## 📜 명세 (API)

이 모듈은 딱 함수 하나만 제공함

```typescript
seaballConverter(input: string): string
- input: (필수) 영문 자판으로 잘못 입력된 한글 문자열
- 반환값: 올바르게 변환된 한글 문자열을 돌려줌
```


---
# 감사합니다
Made with ❤️ by Daanta

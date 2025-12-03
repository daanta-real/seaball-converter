# seaball-converter v1.0.4 - 변경사항 정리

## 핵심 변경사항

### 1. 새로운 역방향 함수 추가: `englishify`
```typescript
// 한글 → 영문 자판 표기
englishify('안녕하세요') // 'dkssudgktpdy'
```

### 2. 기존 함수 명시화: `hangulify`
```typescript
// 영문 자판 → 한글 (기존 기능, 이름만 명시화)
hangulify('dkssudgktpdy') // '안녕하세요'
```

### 3. Backward Compatibility 완벽 유지 ✅
기존 코드는 100% 호환:
```typescript
// v1.0.3 코드가 그대로 작동
import seaballConverter from 'seaball-converter';
seaballConverter('dkssudgktpdy'); // 여전히 작동
```

---

## 코드 구조 변경

### 기존 (v1.0.3)
```typescript
export default (input: string): string => { ... }
```

### 신규 (v1.0.4)
```typescript
export const hangulify = (input: string): string => { ... }
export const englishify = (input: string): string => { ... }
export default hangulify; // backward compatibility
```

---

## 구현 핵심

### englishify 함수 로직
1. `Hangul.disassemble()` - 한글을 자모로 분해
2. 각 자모를 역방향 맵으로 영문 변환
3. 결합해서 영문 자판 표기 반환

예: '안' → ['ㅇ', 'ㅏ', 'ㄴ'] → ['d', 'k', 's'] → 'dks'

### 역방향 맵 생성 (동적)
```typescript
const korToEngMap = Object.entries(engToKorMap)
    .reduce((acc, [eng, kor]) => {
        if (!acc[kor]) acc[kor] = eng;
        return acc;
    }, {} as { [key: string]: string });
```
- `engToKorMap` 유지보수만으로 양방향 자동 지원

---

## 테스트 커버리지

새로운 테스트 케이스:
- `hangulify` 기본 변환
- `englishify` 기본 변환
- 빈 문자열 처리
- 혼합 입력 (한글+숫자, 영문+특수문자)
- 쌍방향 변환 검증 (한글→영타→한글)

---

## 마이그레이션 가이드

### 🟢 기존 사용자 - 아무것도 안 해도 됨
```typescript
// 그대로 사용 가능
import seaballConverter from 'seaball-converter';
```

### 🟡 새 기능 사용 시
```typescript
import { hangulify, englishify } from 'seaball-converter';

hangulify('dkssudgktpdy');   // 안녕하세요
englishify('안녕하세요');     // dkssudgktpdy
```

---

## 패키지 정보 업데이트

- `version`: 1.0.3 → 1.0.4
- `description`: 쌍방향 변환 안내 추가
- 파일 구조 유지 (no breaking changes)

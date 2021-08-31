# jary-calendar

### Quick start

```shell
npm install jary-calendar
```

```js
import { getMonth } from "jary-calendar";

const month = getMonth(2021,8); // year, month

```

### Description

[캘린더를 구현해보자](https://velog.io/@jary/%EC%BA%98%EB%A6%B0%EB%8D%94%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EC%9E%90)

### 참고
Node.js에서 실행할 경우 다음과 같은 에러가 날 수 있습니다.
```
SyntaxError: Cannot use import statement outside a module
```
해당 모듈은 ES Module로 작성되어 있어 브라우저 환경에서 실행이 가능합니다.

Node.js에서 사용하고 싶다면 `package.json`에 `"type":"module"` 항목을 추가합니다.
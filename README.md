# GPH Preoccupancy Council

GPH Preoccupancy Council은 Go(백엔드)와 React TypeScript(프론트엔드)로 구축된 풀스택 애플리케이션입니다.

## 프로젝트 구조

```
gph-preoccupancy-council/
├── cmd/app/                 # 애플리케이션 진입점
├── configs/                 # 설정 파일
├── db/migrations/           # 데이터베이스 마이그레이션
├── internal/
│   ├── domain/             # 핵심 도메인 모델 및 타입
│   ├── handler/            # HTTP 핸들러 (컨트롤러)
│   ├── repository/         # 데이터베이스 상호작용
│   └── service/            # 비즈니스 로직
├── webUI/                  # React TypeScript 프론트엔드
│   ├── src/
│   │   ├── api/            # API 호출 함수
│   │   ├── assets/         # 정적 파일
│   │   ├── components/     # 재사용 가능한 UI 컴포넌트
│   │   ├── hooks/          # 커스텀 React 훅
│   │   ├── pages/          # 라우트 레벨 페이지 컴포넌트
│   │   ├── router/         # React Router 설정
│   │   ├── store/          # 전역 상태 관리
│   │   ├── types/          # TypeScript 타입 정의
│   │   └── utils/          # 유틸리티 함수
│   └── public/             # 공개 자산
├── build/                  # 빌드 아티팩트
├── docs/                   # 문서
└── go.mod                  # Go 모듈 파일
```

## 개발 환경

이 프로젝트는 VS Code Dev Container를 사용하여 개발 환경을 제공합니다.

### Dev Container 실행

1. VS Code에서 프로젝트를 열고 Dev Container로 다시 열기
2. 컨테이너가 빌드되면 모든 개발 도구가 준비됩니다

### 백엔드 (Go)

1. Go 의존성 설치:
   ```bash
   go mod tidy
   ```

2. 애플리케이션 실행:
   ```bash
   go run ./cmd/app
   ```

3. 테스트 실행:
   ```bash
   go test -v ./...
   ```

### 프론트엔드 (React TypeScript)

1. 프론트엔드 디렉토리로 이동:
   ```bash
   cd webUI
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 시작:
   ```bash
   npm run dev
   ```

4. 테스트 실행:
   ```bash
   npm test
   ```

## 개발

### 백엔드 개발

- `gofmt`를 사용하여 Go 코딩 표준 준수
- `uber-go/zap`을 사용한 구조화된 로깅
- 적절한 오류 처리 구현
- 모든 비즈니스 로직에 대한 단위 테스트 작성

### 프론트엔드 개발

- ESLint + Prettier 규칙 준수
- 타입 안전성을 위한 TypeScript 사용
- 반응형 디자인 구현
- React Testing Library를 사용한 단위 테스트

## 테스팅

- 백엔드: 80% 테스트 커버리지 목표
- 프론트엔드: 80% 테스트 커버리지 목표
- Testcontainers를 사용한 통합 테스트

## 보안

- 모든 사용자 입력 검증
- SQL 인젝션 방지를 위한 매개변수화된 쿼리 사용
- 환경 변수에 비밀번호 저장
- 정기적인 의존성 취약점 스캔

## 성능

- 데이터베이스 쿼리 최적화
- 캐싱 전략 구현
- 지연 로딩 및 페이지네이션 사용
- 고루틴을 사용한 비동기 작업 실행

## 배포

### Docker

1. 백엔드 이미지 빌드:
   ```bash
   docker build -t gph-council-backend .
   ```

2. 프론트엔드 이미지 빌드:
   ```bash
   cd webUI
   docker build -t gph-council-frontend .
   ```

### 환경 변수

다음 환경 변수를 설정하세요:

```bash
# 데이터베이스
DB_HOST=localhost
DB_PORT=5432
DB_NAME=gph_council
DB_USER=postgres
DB_PASSWORD=your_password

# 서버
PORT=8080
LOG_LEVEL=info
```

## 기여하기

1. Conventional Commits 준수
2. 기능 브랜치 생성 (예: `feat/user-authentication`)
3. 새 기능에 대한 테스트 작성
4. 코드 리뷰를 위한 Pull Request 제출

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
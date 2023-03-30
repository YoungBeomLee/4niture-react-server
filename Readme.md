# 가구 쇼핑몰 프로젝트
>> PWA 앱으로 제작한 풀스택 프로젝트입니다.
>> 프론트페이지는 React를 사용하여 제작하였습니다.
>> 벡앤드는 NodeJS의 Express프레임워크를 활용하여 서버를 구현하였고 Sequelize 를 사용하여 데이터베이스도 모델링하였습니다.

## 배포URL [🔗리액트앱][https://4urniture-react.vercel.app/]
## 백엔드 서비스URL  [🔗리액트앱][https://port-0-furnitureserver-nx562olfdt8jh2.sel3.cloudtype.app/]
## 백엔드 깃허브 [🔗리액트앱][https://github.com/naehyun25/4niture_server.git]

[![NPM Version][npm-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

한 두 문단으로 프로젝트 소개 글을 작성합니다.

![](https://user-images.githubusercontent.com/120350423/228405302-749b0572-6b64-4a6a-bb7b-d735ac759710.png)

## 설치 방법

리액트 앱 설치

```sh

npx crete-react-app my-app
cd my-app

```


## 사용 예제

스크린 샷과 <a href="http://naver.com" target="blank">코드 예제 새창띄우기</a>를 통해 사용 방법을 자세히 설명합니다.

_더 많은 예제와 사용법은 [표시되는글자][http://naver.com]를 참고하세요._

## 개발 환경 설정

모든 개발 의존성 설치 방법과 자동 테스트 슈트 실행 방법을 운영체제 별로 작성합니다.

```sh
1.  git clone https://github.com/hejo47/4urniture_react.git
2.  npm i
3.  npm i react-router-dom
4.  npm i antd
5.  npm install swiper
6.  npm i axios

```

## 구현 목록

* MainPage
    * 각 섹션별 컴포넌트를 이용하여 구성.
    * 메인배너 SwiperSlide
    * 메인 New,Best 상품 데이터를 선별하여 출력.
* SubPage
     - 제품 상세 페이지
    데이터를 axios 사용하여 데이터베이스에서 불러오기.
    상품구매 탭 구현하여 구매시 수량감소 -> 품절처리.
    
    - 상품 업로드 페이지
     데이터베이스에 axios 사용하여 데이터베이스 추가하기.

     - 카테고리 페이지
    데이터 값중 일부를 추출하여 일치하는 것만 화면에 출력하기.

    
    - 리뷰, 리뷰업로드 페이지.
    리뷰를 업로드하면 리뷰 서버에 리뷰 등록.
    리뷰 데이터베이스를 불러와 리뷰 페이지를 구현.



##     

## 구현 중 어려웠던 점






## 정보

이름 – [@트위터 주소](https://twitter.com/dbader_org) – 이메일주소@example.com

XYZ 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요. 
5. 풀리퀘스트를 보내주세요.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
[node-version-url]: http://nodejs.org/download/
[node-version-image]: https://img.shields.io/node/v/accepts.svg

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |
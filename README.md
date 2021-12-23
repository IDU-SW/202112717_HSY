### 202112717 한상영

### 프로젝트 소개 : 업비트 헬퍼

#### 의의 : 업비트의 웹 사이트나 앱은 현 시세를 보거나 코인을 매수할 때는 편하다. 하지만, 보유 코인의 개수가 많아지면 팔 때 일일이 팔기는 여간 힘든 일이 아니다.
#### 목적 : 1, 2학기에 배운 Express, React을 익히고, 현재 사용할 수 있는 앱 개발


####  목표
    1. Backend - Express로 rest server 개발
    2. Frontend - React, React-Redux로 개발
    3. 마켓 조회, 캔들 조회, 내 계좌 조회, 선택해서 팔기


#### 구성
Upbit API 접근은 Backend 서버가 하고, Backend rest Api 서버에 요청하여 Frontend 서버는 데이터를 그린다.

##### 개발 기능
1. 거래 가능한 마켓 조회
2. 캔들 조회 ( 분, 일, 주, 달 기준, 개수 선택 ) 
   * 마켓 필터링
3. 내 계좌 속 자산 조회
4. 선택한 자산 입력한 개수 만큼 팔기


* gitignore
  * 사용자 거래 고유 키를 보유하고 있는 파일과 노드 모듈 제외
* Backend
  * Working Directory : /back_express
  * routes와 Service로 구성. 
  * 'cors'의 사용으로 back-front 간 통신
  
* Frontend 
  * Working Directory: /front_react
  * /constant : 상수. 왼쪽 사이드 바 구성할 menus와 markets 정보 등을 가짐.
  * /reducers : store에 담길 state들 정의
  * App.jsx : AppTemplate으로 View를 왼쪽 사이드 바와 메인 화면으로 나눔
  * /Template/AppTemplate.jsx : LeftSidebar와 Main에 grid 설정
  * /main : main.jsx에서 선택될 컴포넌트 집합. store의 menus의 상태에 따라 View를 그림


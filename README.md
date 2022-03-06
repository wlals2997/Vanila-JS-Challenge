# Vanila JS Challenge
 
### 자바스크립트 챌린지를 통해 많은 기능들을 구현해보았습니다.
👉🏼[웹페이지 링크](https://wlals2997.github.io/MyTODO/)

#### 목차
1. [구현목록](#1-%EA%B5%AC%ED%98%84%EB%AA%A9%EB%A1%9D)
2. [느낀점](#2-%ED%8A%B9%EC%A7%95)


## 1. 구현목록
##### test1
* mouseleave, mouseenter이벤트를 이용하여 title 글을 바꾸도록 함.
* resize이벤트로 화면의 사이즈가 변할시 title의 글이 바뀜.
* contextmenu 이벤트로 오른쪽 마우스를 클릭할시 title의 글이 바뀌도록 함

##### test2
- window의 innerWidth 가 작아지고 커질시 backgroundColor가 바뀌도록 함

#### test3,test4
- 카지노 랜덤숫자 게임
-test3와 test4의 주제는 같으나 코드를 다르게 하여 구현하였다.
- Math.random 을 통해서 숫자를 랜덤으로 나오게 하였음.
- 정수로 나오기 위해서 Math.ceil함수를 이용하여 숫자를 올림하도록 하였음.
- 유저의 숫자와 랜덤으로 뽑힌 숫자가 같을 시 you won 을 나타내도록하였고 틀릴시 you lost를 나타내도록 하였음
- 무한 클릭으로 게임을 계속 진행 할 수 있음.
- test 4
    - result-num 과 result-con 에 hidden 클래스 부여하여 유저의 숫자와 랜덤숫자가 같을 시 resultNumber 에 hidden 클래스는 사라지고 resultCondition에 hidden 클래스 추가.
    - 다를시 반대로 되도록 구현.

#### test5
- 크리스마스 이브 디데이 알림 웹사이트.
- 크리스마 날짜 date를 받을 수 있도록 하였음.
- date함수를 이용하여 현재 날짜와 크리스마스 날짜를 계산하도록 하여 화면에 출력하도록 하였음.
- 크리스마스 까지 남은 시간을 계산하여 padStart 메서드를 이용하여 화면에 출력하였다.
- setInterval 함수를 이용하여 1초마다 화면에 나올 수 있도록 하였다.

#### test6
- Give me color 라는 버튼 클릭시 색상이 랜덤으로 나올 수 있도록 함.
- linear-gradient 함수를 이용하여 색상이 그라데이션으로 표현될 수 있도로 함.


## 2. 느낀점 
- 총 이주동안의 챌린지를 하면서 많은 기능들을 구현해 보았다.단순히 따라 치는 것이 아닌 혼자서 문제들을 해결해보고 배운부분들을 응용해보는 유익한 시간이었다. js에 대한 이해도가 높아진 만큼 사용하는것도 편해졌고 코드를 어떻게 짜야할지 생각도 달라진것 같다.

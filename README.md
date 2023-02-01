# AWESOME CHATBOT
**챗봇과 ACC 카드를 이용한 발달 장애인의 의료 진단을 위한 서비스**

<br>

**Date**
: 2022.01~ 2022.03
<br>

**Team**
: 2인 (FE/BE 구분 없이 진행)
팀명 : I Can Do 'IT'
- 김민서 : 기획 및 안드로이드(+ dialogflow 설계, 카카오맵 API 이용)
- 박예진 : 기획 및 안드로이드(+ dialogflow 이용해서 챗봇 연결)
<br>



**Video**
<br>
- Link : [AWESOME CHATBOT_발달장애인건강체크챗봇 시연 영상](https://www.youtube.com/watch?v=DzxUDhtKZTM)

## ✍️ 요약
- 사용 대상
    - 발달장애인
- 문제 의식
    - 발달 장애인은 아픈 곳을 인지하지 못하거나 통증 부위에 따라 어느 병원에 가야 하는지 모르는 경우가 대다수이다.
    - 이는 발달장애인의 건강 유지를 어렵게 할 뿐만 아니라, 병원 진료 시 부정확한 건강 진단으로 이어진다.
    - 발달장애인의 의사소통을 원활하게 돕고, 건강을 자가진단 할 수 있도록 하는 서비스를 제공하고자 한다.
- 제공 서비스
    - 키워드를 이용한 건강 진단 챗봇
    - 주변 병원 지도 추천
    - 건강 자가 진단 ACC 그림 카드
    - 의료 기록 정보, 병원 예약
 
<img width="705" alt="스크린샷 2023-01-15 오후 4 55 22" src="https://user-images.githubusercontent.com/62551459/215962653-bfe955c9-c9f8-40f4-8a4f-0bb3f14595dc.png">
<img width="733" alt="스크린샷 2023-01-15 오후 4 55 33" src="https://user-images.githubusercontent.com/62551459/215962675-e680bc80-3ba6-42d1-84b3-3ae75037ab6b.png">

## 🛠 사용 기술 및 라이브러리
- Android : Kotlin
- DB : MongoDB
- Server : Node.js
- chatbot : dialogflow 
   
### [how to use]
1) mongodb 연결
   <br> cmd창에서 mongod --dbpath /Users/사용자명/database/local 입력 후 엔터
2) awesomechatbot_backend clone 후 프로젝트 폴더에서 node app.js 명령어 입력
3) awesomechatbot_frontend clone
   - cmd 창에서 ipconfig한 뒤 ipv4 주소 복사
   - RetrofitBuilder.kt 에서 baseUrl 문자열 부분을 ("http://'ipv4주소':3000") 으로 변경
   - 안드로이드 스튜디오 실행

### [기능 설명]
1) 앱 실행 화면 및 스플래시 화면
<div>
<img src="https://user-images.githubusercontent.com/71651038/132208890-bd418e2c-47f9-4097-b8d1-5b6d0edafb53.jpg" width="300" height="500">
<img src="https://user-images.githubusercontent.com/71651038/132209083-269efbcc-7a57-43c7-8d20-cddc9c468a32.jpg" width="300" height="500">
<div/>
<br><br>
2) 회원 관리 - 로그인/회원가입 : 주요 정보인 사용자의 장애 유형과 장애 등급 저장
<br>
<img src="https://user-images.githubusercontent.com/71651038/132209531-0328c721-db39-4f3a-b983-32ed4c6e1616.jpg" width="300" height="500">
<br><br>
3) 메인 화면 - 진료기록/재진날짜디데이/사용자 정보 표시
   
   + 진료기록 : 병원에서 진료를 받을 때 의료진이 추가해주는 경우, 사용자가 까먹을 수 있는 의사선생님의 당부 등을 상기시킬 수 있고, 의료진 또한 해당 환자가 어떤 병력이 있었는지 한눈에 볼 수 있음
  <div>
    <img src="https://user-images.githubusercontent.com/71651038/132210273-3726a7f3-a8f8-4355-b2c5-0553ba6a8cc6.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132210359-4701ef0d-5591-4d78-adb9-e269b19f83ea.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132210433-868b77d2-6908-4cf6-be6f-a146e3326061.jpg" width="200" height="450">
  <div/>
  <br>
  
   + 재진날짜디데이 : 가장 근접한 재진 날짜 디데이를 메인에서 보여주며, 해당 디데이를 클릭하면 재진 날짜 디데이 리스트들을 볼 수 있음
   <div>
    <img src="https://user-images.githubusercontent.com/71651038/132210273-3726a7f3-a8f8-4355-b2c5-0553ba6a8cc6.jpg" width="300" height="500">
    <img src="https://user-images.githubusercontent.com/71651038/132210913-d85f185a-502e-47a9-bf1c-71817fc3a27f.jpg" width="300" height="500">
  <div/>
  
   + 사용자 정보 표시 : 드로어 화면을 이용한 사용자의 정보를 보여줌
   <div>
    <img src="https://user-images.githubusercontent.com/71651038/132211224-067b4018-2f37-4c4f-b67c-378c3f30948e.jpg" width="300" height="500">
  <div/>
<br><br>
4) 자가진단 챗봇 기능 : 매일 발달장애인이 자신의 건강을 자가 진단할 수 있도록 하는 서비스 => 사용자와 나눈 대화를 분석하여 증상이 있다고 파악될 시 병원 정보 제공
   
   + 챗봇 시작 화면
   <div>
    <img src="https://user-images.githubusercontent.com/71651038/132211499-88cedbb4-d595-44e2-a863-01af3ea651c3.jpg" width="300" height="500">
    <img src="https://user-images.githubusercontent.com/71651038/132211571-2e0634fb-959f-4a1d-ad3c-d11e951d2103.jpg" width="300" height="500">
  <div/>
  
   + 아픈 곳이 있다고 판단된 경우 (관련된 병원 리스트로 추천 및 원하는 병원 누르면 해당 병원 위치 맵으로 보여줌)
   <div>
    <img src="https://user-images.githubusercontent.com/71651038/132211916-1930f8a0-3d6f-4601-acdd-610aa80dccf5.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132211941-994ff635-f7a2-4253-ba86-36dbd8e8dca9.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132212078-27778049-9b1e-463c-9b23-166fed959255.jpg" width="200" height="450">
  <div/>
  <div>
    <img src="https://user-images.githubusercontent.com/71651038/132212217-b868fe1e-84c3-426c-bbad-9e684bb6d591.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132212252-ad4c22ed-df44-489d-81c3-57c684dd6bba.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132212284-5846b946-1f24-4593-9477-c1e10945c16f.jpg" width="200" height="450">
  <div/>
  
   + 아픈 곳이 없다고 판단된 경우
   <div>
    <img src="https://user-images.githubusercontent.com/71651038/132213143-5feea381-757f-4477-b9fe-6f0404153ef8.jpg" width="300" height="500">
    <img src="https://user-images.githubusercontent.com/71651038/132213178-4165ba27-293c-49dc-8fab-7e2fc13c9cb2.jpg" width="300" height="500">
  <div/>

<br><br>
5) 의료 진단 ACC 카드 : 사용자가 의료진과 진료를 볼 때 보다 원활한 의사소통을 위한 ACC 카드 사용, 진단 완료 시 의료진이 한눈에 볼 수 있도록 결과 출력
  <div>
    <img src="https://user-images.githubusercontent.com/71651038/132212726-8b85c8a0-36d2-4d57-894a-c68202bdc972.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132212776-da4910e7-bc76-431b-ba9e-91e008a284de.jpg" width="200" height="450">
    <img src="https://user-images.githubusercontent.com/71651038/132212795-f949d564-0f2b-46cb-8bec-4e0f7357127f.jpg" width="200" height="450">
  <div/>
  
<br><br>
6) 진료기록 추가 : 사용자가 의료진과 진료를 볼 때 의료진의 당부 등이 기억나지 않을 경우를 대비해 다시 상기시키기 쉽도록 의료진이 직접 진료기록을 추가할 수 있는 기능
  
   + 진료기록 추가 화면
   <div>
    <img src="https://user-images.githubusercontent.com/71651038/132213579-a953c039-5358-4228-a302-f414e0361c78.jpg" width="300" height="500">
    <img src="https://user-images.githubusercontent.com/71651038/132213611-884a965e-a53e-462b-b041-8ec5f2770b2c.jpg" width="300" height="500">
  <div/>
  
   + 추가 후에 메인화면에 추가된 모습
   <div>
    <img src="https://user-images.githubusercontent.com/71651038/132213713-c5e61d17-ad9c-42c7-8369-5e8ee5d59e3e.jpg" width="300" height="500">
    <img src="https://user-images.githubusercontent.com/71651038/132213748-2149dc67-9a3e-47b3-8781-952b7d2c1506.jpg" width="300" height="500">
  <div/>
  
<br><br><br>

### [향후 발전시키고 싶은 점]
+ 챗봇에서 사용자가 아프다고 답변을 했을 때 관련 병원 리스트와 위치를 맵으로 보여주는 것 뿐만 아니라 원하는 병원에 연계까지 해주는 기능
+ 프로젝트에 추가한 증상 및 부위 외에도 더 많은 증상들을 업데이트해서 보다 나은 서비스를 제공
+ 챗봇에서 웹 접근성 향상 도모 - 글을 적을 수 없는 사용자를 위한 음성인식으로도 챗봇과 대화할 수 있는 서비스 제공
+ 챗봇 외에도 신체 부위를 그림으로 보여주어 그림에서 아픈 부위를 터치하면 바로 인식할 수 있는 기능 


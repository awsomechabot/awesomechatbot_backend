// Express 기본 모듈 불러오기
const express = require("express");
const http = require("http");
const path = require("path");

// Express의 미들웨어 불러오기
const bodyParser = require("body-parser");
const static = require("serve-static");

//===== mongoose 모듈 사용 =====//
const mongoose = require("mongoose");

// 익스프레스 객체 생성
const app = express();

// 포트 설정
app.set("port", process.env.PORT || 3000);

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = http.createServer(app).listen(app.get("port"), function () {
  console.log("서버 시작됨");
});

// Express 기본 모듈 불러오기
const express = require("express");
const http = require("http");
const path = require("path");
const mongoClient = require("mongodb").MongoClient;

// Express의 미들웨어 불러오기
const bodyParser = require("body-parser");
const static = require("serve-static");

//===== mongoose 모듈 사용 =====//
const mongoose = require("mongoose");

// 익스프레스 객체 생성
const app = express();

const url = "mongodb://localhost:27017";
app.use(express.json());

// 포트 설정
app.set("port", process.env.PORT || 3000);

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//===== 데이터베이스 연결 =====//
// 데이터베이스 객체를 위한 변수 선언
let database;

// 데이터베이스 스키마 객체를 위한 변수 선언
let RecordSchema;

// 데이터베이스 모델 객체를 위한 변수 선언
let RecordModel;

//데이터베이스에 연결
function connectDB() {
  // 데이터베이스 연결 정보
  var databaseUrl = "mongodb://localhost:27017/local";

  // 데이터베이스 연결
  console.log("데이터베이스 연결을 시도합니다.");
  mongoose.Promise = global.Promise; // mongoose의 Promise 객체는 global의 Promise 객체 사용하도록 함
  mongoose.connect(databaseUrl);
  database = mongoose.connection;

  database.on(
    "error",
    console.error.bind(console, "mongoose connection error.")
  );
  database.on("open", () => {
    console.log("데이터베이스에 연결되었습니다. : " + databaseUrl);

    // 스키마 정의
    RecordSchema = mongoose.Schema({
      user_id: { type: String, required: true },
      hospital_name: { type: String, required: true },
      disease_name: { type: String, required: true },
      today_date: { type: String, required: true },
      part: { type: String, required: true },
      advice: { type: String },
      redate: { type: String },
    });

    RecordSchema.static("findById", function (user_id, callback) {
      return this.find({ user_id: user_id }, callback);
    });

    // RecordModel 모델 정의
    RecordModel = mongoose.model("records", RecordSchema);
  });

  // 연결 끊어졌을 때 5초 후 재연결
  database.on("disconnected", function () {
    console.log("연결이 끊어졌습니다. 5초 후 재연결합니다.");
    setInterval(connectDB, 5000);
  });
}

app.get("/records", (req, res) => {
  RecordModel.findById(req.query.uid, (err, results) => {
    console.log("아이디: " + req.query.uid);
    if (err) {
      console.log("에러 발생.");
      res.end();
      return;
    }

    if (results) {
      console.dir("결과 : " + results);
      res.send(results);
    }
  });
});

app.post("/records", (req, res) => {
  const record = new RecordModel({
    user_id: req.body.user_id,
    hospital_name: req.body.hospital_name,
    disease_name: req.body.disease_name,
    today_date: req.body.today_date,
    part: req.body.part,
    advice: req.body.advice,
    redate: req.body.redate,
  });

  record.save((err) => {
    if (err) {
      console.log("에러 발생.");
      res.end();
      return;
    }
    console.log("진료기록 데이터 추가함.");
    res.send({ message: "진료기록 추가" });
  });
});

mongoClient.connect(url, (err, db) => {
  if (err) {
    console.log("Error while connecting mongo client");
  } else {
    const myDb = db.db("myDb");
    const collection = myDb.collection("chatbotuser");

    app.post("/signup", (req, res) => {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        birth: req.body.birth,
      };

      const query = { email: newUser.email };

      collection.findOne(query, (err, result) => {
        if (result == null) {
          collection.insertOne(newUser, (err, result) => {
            res.status(200).send();
          });
        } else {
          res.status(400).send();
        }
      });
    });

    app.post("/login", (req, res) => {
      const query = {
        email: req.body.email,
        password: req.body.password,
      };

      collection.findOne(query, (err, result) => {
        if (result != null) {
          const objToSend = {
            name: result.name,
            email: result.email,
            number: result.number,
            birth: result.birth,
          };

          res.status(200).send(JSON.stringify(objToSend));
        } else {
          result.status(404).send();
        }
      });
    });
  }
});

const server = http.createServer(app).listen(app.get("port"), function () {
  console.log("서버 시작됨");
  connectDB();
});

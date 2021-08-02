// Express 기본 모듈 불러오기
const express = require("express");
const http = require("http");
const path = require("path");
const mongoClient = require('mongodb').MongoClient;

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

mongoClient.connect(url, (err, db) => {
    if (err) {
        console.log('Error while connecting mongo client');
    } else {
        const myDb = db.db('myDb');
        const collection = myDb.collection('chatbotuser');

        app.post('/signup', (req, res) => {
            
            const newUser = {
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                number : req.body.number,
                birth : req.body.birth
            };
            
            const query = {email: newUser.email};

            collection.findOne(query, (err, result) => {
                if(result == null) {
                    collection.insertOne(newUser, (err, result) => {
                        res.status(200).send();
                    });
                } else {
                    res.status(400).send();
                }
            });
            
        });

        app.post('/login', (req, res) =>{

            const query = {
                email: req.body.email,
                password: req.body.password
            }

            collection.findOne(query, (err, result) => {
                if(result!=null){

                    const objToSend = {
                        name: result.name,
                        email: result.email,
                        number : result.number,
                        birth : result.birth
                    }
    
                    res.status(200).send(JSON.stringify(objToSend));
                } else {
                    result.status(404).send();
                }
            });
        })
    }
});

const server = http.createServer(app).listen(app.get("port"), function () {
  console.log("서버 시작됨");
});

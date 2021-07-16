import React from "react"
import api from "../assets/icons/api.png";
import computer from "../assets/icons/computer.png";
import backend from "../assets/icons/backend.png";
import javag from "../assets/icons/javag.png";

const service = [
    {
      icon: computer,
      title: "Frontend Development",
      about: [
        "I can built a beautiful and scalable SPA using",
        <strong key={1}> HTML </strong>,
        ",",
        <strong key={1}> CSS </strong>,
        "and",
        <strong key={1}> React.JS </strong>,
      ],
    },
    {
      icon: backend,
      title: "Backend Development",
      about: [
        "I can Handle database, server, API using",
        <strong key={1}> NodeJS </strong>,
        ",",
        <strong key={1}> ExpressJS </strong>,
        "and",
        <strong key={1}> MySql/MongoDB </strong>,
      ],
    },
    {
      icon: api,
      title: "API Development",
      about: [
        "I can Develop robust REST API using",
        <strong key={1}> ExpressJS-Rest-API</strong>,
        ".",
      ],
    },
    {
      icon: javag,
      title: "Java Development",
      about: [
        "I can built java application using",
        <strong key={1}> Java </strong>,
        "and",
        <strong key={1}> Oracle </strong>,
        ",",
        <strong key={1}> MySql </strong>,
        "or",
        <strong key={1}> SQLite </strong>,
        "database.",
      ],
    },
  ];

  export default service;
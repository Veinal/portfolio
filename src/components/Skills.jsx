import React from 'react';
import html from '../logos/html.png';
import css from '../logos/css.png';
import js from '../logos/js.png';
import reactLogo from '../logos/react.png';
import mongoDB from '../logos/mongo.png';
import nodejs from '../logos/nodejs.png';
import express from '../logos/express.png';
import mui from '../logos/mui.png';
import bootstrap from '../logos/bootstrap.png';
import mdbootstrap from '../logos/mdbootstrap.jpg';
import C from '../logos/C.png';
import CPP from '../logos/C++.png';
import python from '../logos/python.png';
import tailwind from '../logos/tailwind.jpg';
import git from '../logos/git.png';
import github from '../logos/github.png';
import mysql from '../logos/mysql.png';

export default function Skills() {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-center font-bold text-4xl mb-10">SKILLS</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-6 gap-4">
        <div className="flex justify-center items-center">
          <img src={html} alt="HTML" className="w-20 h-20 object-contain " />
        </div>
        <div className="flex justify-center items-center">
          <img src={css} alt="CSS" className="w-20 h-20 object-contain " />
        </div>
        <div className="flex justify-center items-center">
          <img src={js} alt="JavaScript" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={reactLogo} alt="React" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={mongoDB} alt="MongoDB" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={nodejs} alt="Node.js" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={express} alt="Express.js" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={mui} alt="Material-UI" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={bootstrap} alt="Bootstrap" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={mdbootstrap} alt="MDBootstrap" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={C} alt="C" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={CPP} alt="C++" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={python} alt="Python" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={tailwind} alt="Tailwind CSS" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={git} alt="Git" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={github} alt="GitHub" className="w-20 h-20 object-contain rounded-full" />
        </div>
        <div className="flex justify-center items-center">
          <img src={mysql} alt="MySQL" className="w-20 h-20 object-contain rounded-full" />
        </div>
      </div>
    </div>
  );
}

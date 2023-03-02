import inquirer from 'inquirer';
import fs from 'fs';
import os from 'os';
import { execSync } from "child_process";

const inquire = (callback: (value: unknown) => void) =>inquirer.prompt([
   {
      name: 'greeting',
      message: 'What would you like to say?',
      type: 'input'
     }])
    .then(function(answer){
      console.log(answer);
    });


export {
  inquire
}
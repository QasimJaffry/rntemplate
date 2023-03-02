#!/usr/bin/env ts-node

// Show spinner in terminal and ask for questions

import ora from 'ora';
import { inquire } from './generator';

const spinner = ora('Optional libraries setup');

// new Promise((resolve) => {
//   spinner.start();
//   inquire(resolve);
// })
//   .then(() => {
//     spinner.succeed();
//   })
//   .catch((error) => {
//     spinner.fail(error);
//     throw new Error(
//       'Something went wrong during the post init script execution',
//     );
//   });



 new Promise((resolve) => {
      spinner.start();
      console.log("\nTemplate initialization successful! 🚀");
    //   resolve();
    })
      .then(() => {
        spinner.succeed();
      })
      .catch(() => {
        spinner.fail();
        throw new Error(
          "Something went wrong during the post init script execution"
        );
      });

require('dotenv').config({path: __dirname + '/.env'});
const fs = require('fs');
const writeFile = fs.writeFile;
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.prod.ts';
// Load node modules
const colors = require('colors');
// `environment.ts` file structure
const envConfigFile = `export const environment = {
  production: true,
  apiUrl: 'http://kennansportfolio-env.eba-dnc6b2pr.us-east-1.elasticbeanstalk.com/api',
  DOMAIN: '${process.env.DOMAIN}',
  MAILGUN_API: '${process.env.MAILGUN_API}'
};
`;
console.log(colors.magenta('The file `environment.prod.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err: any) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.prod.ts file generated correctly at ${targetPath} \n`));
   }
});

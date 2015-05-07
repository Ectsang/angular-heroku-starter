# angular-heroku-starter

![Heroku FTW](http://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png)

Clone this repo and follow along at: [Deploying Your Angular to Heroku](http://erictsang.co/deploying-your-angular-to-heroku/)

## Steps
git clone https://github.com/Ectsang/angular-heroku-starter.git

cd angular-heroku-starter

yo angular-seed

? What would you like to call your angular app (and base module)? demo

? Angular version?

? UI Router version? (Or just press enter if you don't want this library) latest

? jQuery Version? (Or just press enter if you don't want this library)

? Bootstrap version? (Or just press enter if you don't want this library)

? Underscore Version? (Or just press enter if you don't want this library)

   create demo/package.json
   
   ...
   
   create demo/README.md

cd demo

npm install

bower install

## Tutorial

> Your app runs just fine on your localhost, but when you push a build to Heroku, it doesn’t run.

Turns out – if your Angular app has no backend, i.e. no Node.js, Ruby (Rails/Sinatra), PHP, Python (Django/Flask), etc, it may be a bit tricky to get your app running on Heroku.

[read more](http://erictsang.co/deploying-your-angular-to-heroku/)



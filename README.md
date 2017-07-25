install angular/cli 

    >> npm install -g @angular/cli

clone folder

    >> git clone https://github.com/chanpan/ng-template.git

install package 

    cmd >> cd ezform-desktop 

        >> npm install

To build for development

    cmd >> cd ezform-desktop
        >> npm start
    cmd >> cd ezform-desktop
        >> npm run serve

To build for production

    cmd >> cd ezform-desktop

        >> npm run electron:dev

        >> npm run electron:prod

  Use NodeJS Native libraries
 webpack.config.js

"externals":{

     "electron": 'require(\'electron\')',

      "child_process": 'require(\'child_process\')',

      "fs": 'require(\'fs\')'

    ...
 
 }



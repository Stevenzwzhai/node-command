//clone you project from github or other,and install package

const fs = require('fs')
const { exec } = require('child_process')

exec('git clone <project address>', (err) => {
    if(err){
        console.log(err)
    }

    exec('cd <project name> && <install package(npm i or cnpm i or yarn)>', (err) => {
        if(err)console.log(err);
         console.log('ok')
    })
})

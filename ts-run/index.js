const {exec}  = require('child_process')

let arg = process.argv.slice(2)[0];

exec(`tsc ${arg.split('.')[0]}.ts`, (err, stdout, stderr) => {
    if(err){
        console.log(stdout.toString())
        return;
    }
    exec(`node ${arg.split('.')[0]}.js`, (err, stdout, stderr) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(stdout)
    })
})

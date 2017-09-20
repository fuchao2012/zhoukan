const fs = require('fs-extra')
const path = require('path')
const Crawler = require('crawler')
const argv = require('yargs').argv;
var program = require('commander');

program
    .version('0.1.0')
    .usage('[options] <params ...>')
    .option('-n, --number', 'number like 227')
    .parse(process.argv);

//

let number = argv.number;
if (!number) {
    console.err('number is must, -h for help');
    process.exit(1);
}
let siteName = 'weekly.75team.com';
let pageName = 'issue' + number;

let filepath = path.join(process.cwd(), siteName, pageName)
fs.ensureDirSync(filepath)

let filename = path.join(filepath, 'README.md')
let entryFilename = path.join(process.cwd(), 'README.md')
let url = `https://weekly.75team.com/issue${number}.html`;

const filter = (text) => {
    return new Promise((resolve) => {
        let start = text.indexOf(`<section id="preface">`);
        let end = text.indexOf(`<section id="postface">`)
        resolve(text.substring(start, end))
    })
}

let crawler = new Crawler({
    maxConnection: 10
});

if (url) {
    crawler.queue({
        uri: url,
        filename: filename,
        entryFilename: entryFilename,
        callback: (err, res, done) => {
            if (err) {
                console.error(err)
            } else {
                filter(res.body).then(data => {
                    fs.createWriteStream(res.options.filename).write(data)
                    console.log('Created', res.options.filename, ' from ', res.options.uri);
                }).then(() => {
                    entry = `* [第${number}期](./${siteName}/${pageName}/README.md)`
                    console.log('Append entry into README.md', entry);
                    fs.appendFileSync(res.options.entryFilename, entry);
                }).catch(err => console.log(err))
            }
            done();
        }
    });
}
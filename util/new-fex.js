const fs = require('fs-extra')
const path = require('path')
const Crawler = require('crawler')
const argv = require('yargs').argv;
var program = require('commander');

program
    .version('0.1.0')
    .usage('[options] <params ...>')
    .option('-u, --url', 'links like http://fex.baidu.com/blog/2017/09/fex-weekly-11/')
    .option('-d, --date', 'date string like 0911')
    .parse(process.argv);

let url = argv.url || argv.date;
let month = url.slice(31, 33);
let day = url.slice(-3, -1);
let siteName = url.slice(7, 20);
let pageName = url.slice(-14, -3);
let date = url ? month + day : '';
let filepath = path.join(process.cwd(), siteName, pageName + date)
fs.ensureDirSync(filepath)
let filename = path.join(filepath, 'README.md')
let entryFilename = path.join(process.cwd(), 'README.md')

const filter = (text) => {
    return new Promise((resolve) => {
        let result = text.replace(/<p><strong>/g, '### [')
            .replace(/<\/strong><br \/>(\n|\r|\n\r)/g, '](')
            .replace(/<br \/>(\n|\r|\n\r)/g, ')\n\n')
            .replace(/<\/p>/g, '')
            .replace(/<p>/g, '')
        let start = result.indexOf(`<h2 id="section">深阅读</h2>`);
        let end = result.indexOf(`<div id="SOHUCS"`)
        resolve(result.substring(start, end))
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
                    entry = `* [第${date}期](./fex.baidu.com/fex-weekly-${date}/README.md)`
                    console.log('Append entry into README.md', entry);
                    fs.appendFileSync(res.options.entryFilename, entry);
                }).catch(err => console.log(err))
            }
            done();
        }
    });
}
const fs = require('fs-extra')
const path = require('path')
const Crawler = require('crawler')
const argv = require('yargs').argv;

// http://fex.baidu.com/blog/2017/09/fex-weekly-11/
let url = argv.url || argv.date;

let date = url ? url.slice(31, 33) + url.slice(-3, -1) : ''
let filepath = path.join(process.cwd(), url.slice(7, 20), url.slice(-14, -3) + date)
fs.ensureDirSync(filepath)
let filename = path.join(filepath, 'README.md')
const filter = (text) => {
    let result = text.replace(/<p><strong>/g, '### [')
        .replace(/<\/strong><br \/>(\n|\r|\n\r)/g, '](')
        .replace(/<br \/>(\n|\r|\n\r)/g, ')\n\n')
        .replace(/<\/p>/g, '')
        .replace(/<p>/g, '')
    let start = result.indexOf('<h2 id="section">深阅读</h2>')
    let end = result.indexOf('– THE END –')
    return result.substring(start, end)
}

let crawler = new Crawler({
    maxConnection: 10
});

if (url) {
    crawler.queue({
        uri: url,
        filename: filename,
        callback: (err, res, done) => {
            if (err) {
                console.error(err)
            } else {
                fs.createWriteStream(res.options.filename).write(filter(res.body))
            }
            done();
        }
    });
} else {
    console.log(`url is required
        Usage: 
            node util/new-fex.js --url=http://fex.baidu.com/blog/2017/09/fex-weekly-11/


    `)
}
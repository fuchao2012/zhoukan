const fs = require('fs-extra')
const path = require('path')
const Crawler = require('crawler')
const argv = require('yargs').argv;

let crawler = new Crawler({
    maxConnection: 10,
    callback: (err, res, done) => {
        if (err) {
            console.error(err)
        } else {
            let $ = res.$
            fs.createWriteStream(res.options.filename).write($('.content').text())
        }
        done();
    }
});
let date = argv.url ? argv.url.slice(31, 33) + argv.url.slice(-3, -1) : ''
let filepath = path.join(process.cwd(), 'fex.baidu.com', 'fex-weekly-' + date)
fs.ensureDirSync(filepath)
let filename = path.join(filepath, 'README.md')
if (argv.url) {
    crawler.queue({
        uri: argv.url,
        filename: filename
    });
} else {
    console.log('url is required')
}
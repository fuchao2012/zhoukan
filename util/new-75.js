const fs = require('fs-extra')
const path = require('path')
const Crawler = require('crawler')
const argv = require('yargs').argv
const program = require('commander')
const toMarkdown = require('to-markdown')

program
    .version('0.1.0')
    .usage('[options] <params ...>')
    .option('-n, --number', 'number like 227')
    .parse(process.argv);

let crawler = new Crawler({
    rateLimit: 2000
});

let init = (i) => {
    let number = i ? i : argv.number;
    if (!number) {
        console.err('number is must, -h for help');
        process.exit(1);
    }
    let siteName = 'weekly.75team.com';
    let pageName = 'issue' + number;

    let filepath = path.join(process.cwd(), siteName, pageName)

    let filename = path.join(filepath, 'README.md')
    let entryFilename = path.join(process.cwd(), 'README.md')
    let url = `https://weekly.75team.com/issue${number}.html`;

    const filter = (body) => {
        return new Promise((resolve) => {
            let result = toMarkdown(body, {
                gfm: true,
                converters: [{
                    filter: (node) => node.nodeName === 'DIV' && node.classList[0] === 'meta',
                    replacement: (innerHTML, node) => {
                        return ''
                    }
                }]
            }).replace(/\*\s+/g, '');
            let start = result.indexOf(`<section id="content">`) + 23;
            let end = result.indexOf(`<section id="postface">`) > 0 ? result.indexOf(`<section id="postface">`) : result.indexOf(`<aside id="aside">`) - 13;
            console.log(url, start, end, "done");
            resolve(result.substring(start, end))

        })
    }
    crawler.queue({
        uri: url,
        callback: (err, res, done) => {
            if (err) {
                console.error(err)
            } else {
                filter(res.body).then(data => {
                    fs.ensureDirSync(filepath)
                    fs.createWriteStream(filename).write(data)
                }).then(() => {
                    entry = `\n* [第${number}期](./${siteName}/${pageName}/README.md)`
                    fs.appendFileSync(entryFilename, entry);
                }).catch(err => console.log(err))
            }
            done();
        }
    });
}

for (let i = 1; i <= 227; i++) {
    init(i)
}
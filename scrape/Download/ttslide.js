const axios = require('axios')
const cheerio = require('cheerio')

async function ttslide(url) {
    try {
        const res = await axios({
            method: 'POST',
            url: 'https://tikvideo.app/api/ajaxSearch',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            },
            data: new URLSearchParams({ q: url, lang: 'id' }).toString(),
        })

        const result = []
        if (res.data.status === 'ok') {
            const $ = cheerio.load(res.data.data)
            $('img').each((index, element) => {
                const imgSrc = $(element).attr('src')
                if (imgSrc && !imgSrc.includes('.webp')) {
                    result.push(imgSrc)
                }
            })
        }

        return result.length > 0 ? result : null
    } catch (err) {
        throw Error(err.message)
    }
}

module.exports = ttslide
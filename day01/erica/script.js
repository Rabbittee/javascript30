function playAudio(e) {

    /** 先用 ASCII 排除標點符號 */
    const ascii = e.key.charCodeAt(0)
    if (ascii < 97 || ascii > 122) return

    /** 取出要控制的元件 */
    const audio = document.querySelector(`audio[data-key='${e.key}']`)
    const key = document.querySelector(`.key[data-key='${e.key}']`)
    if (!audio) return

    /** 加上樣式，音訊回到起始時間 */
    key.classList.add('playing')
    audio.currentTime = 0

    /** 處理音訊播放 */
<<<<<<< HEAD
    asyncAudio(audio)

}

async function asyncAudio(audio) {
    /** try..catch */
    try {
        await audio.play()
    } catch {
        stopAudio()
    }

    /** Promise */
    // const promise = audio.play()
    // if (promise == undefined) return
    // promise.then(() => {
    //     audio.play()
    // })
    // .catch(() => {
    //    stopAudio()
    // })
=======
    const audioPromise = audio.play()
    if (audioPromise !== undefined) {
        audioPromise.then(() => {
            audio.play()
        })
        .catch(() => {
            stopAudio()
        })
    }
>>>>>>> update day01 Erica answer & add readme
}

function stopAudio() {
    const keys = document.querySelectorAll('.key')
    const audios = document.querySelectorAll('audio')
    
    /** 移除樣式、停止音訊 */
    keys.forEach((key) => key.classList.remove('playing'))
<<<<<<< HEAD
    audios.forEach((audio) => audio.pause())
=======
    audios.forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
    })
>>>>>>> update day01 Erica answer & add readme
}

document.addEventListener('keydown', playAudio)
document.addEventListener('keyup', stopAudio)


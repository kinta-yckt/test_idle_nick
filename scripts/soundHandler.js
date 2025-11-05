export function playEatDotSound() {
    // kin 1105 add s
    const audio = document.getElementById("eatDot-audio");
    if (audio) {
        audio.currentTime = 0; // 途中なら先頭に戻す
        audio.play().catch(err => {
            console.warn("error:", err);
        });
    } else {
        console.warn("not found eatDot-audio");
    }
    // kin 1105 add e
}


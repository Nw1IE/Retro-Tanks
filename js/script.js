const board = document.getElementById('game-board');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const victoryScreen = document.getElementById('victory-screen');
const menuOverlay = document.getElementById('menu-overlay');

let score1 = 0, score2 = 0, isGameOver = false, running = false;
let walls = [];
const keys = {};

const t1 = createTank('tank1', gameState.p1.color);
const t2 = createTank('tank2', gameState.p2.color);

window.bootGame = (idx) => {
    menuOverlay.style.display = 'none';
    walls = [];
    board.innerHTML = "";
    maps[idx].forEach(obj => {
        for(let ix=0; ix<obj.w; ix+=40) {
            for(let iy=0; iy<obj.h; iy+=40) {
                const el = document.createElement('div');
                el.className = `wall ${obj.t}`;
                el.style.left = (obj.x + ix) + 'px'; el.style.top = (obj.y + iy) + 'px';
                board.appendChild(el);
                if(obj.t !== 'bush') walls.push({x: obj.x + ix, y: obj.y + iy, size: 40, type: obj.t});
            }
        }
    });
    board.appendChild(t1); board.appendChild(t2);
    running = true;
    update();
}

window.addEventListener('keydown', e => {
    if (!running || isGameOver) return;
    keys[e.code] = true;
    if(e.code === 'Space') fire('p1', board);
    if(e.code === 'Enter') fire('p2', board);
});
window.addEventListener('keyup', e => keys[e.code] = false);

function update() {
    if (!running || isGameOver) return;
    ['p1', 'p2'].forEach(pk => {
        const p = gameState[pk], other = pk === 'p1' ? gameState.p2 : gameState.p1;
        let nX = p.x, nY = p.y;
        const up = pk === 'p1' ? 'KeyW' : 'ArrowUp', dn = pk === 'p1' ? 'KeyS' : 'ArrowDown',
              lt = pk === 'p1' ? 'KeyA' : 'ArrowLeft', rt = pk === 'p1' ? 'KeyD' : 'ArrowRight';

        if (keys[up]) { nY -= 3; p.deg = 0; }
        else if (keys[dn]) { nY += 3; p.deg = 180; }
        else if (keys[lt]) { nX -= 3; p.deg = 270; }
        else if (keys[rt]) { nX += 3; p.deg = 90; }

        const hitWall = walls.some(w => nX < w.x + w.size && nX + 34 > w.x && nY < w.y + w.size && nY + 34 > w.y);
        const hitOther = (nX < other.x + 34 && nX + 34 > other.x && nY < other.y + 34 && nY + 34 > other.y);

        if (!hitWall && !hitOther && nX >= 0 && nX <= 966 && nY >= 0 && nY <= 566) {
            p.x = nX; p.y = nY;
        }
    });

    t1.style.left = gameState.p1.x + 'px'; t1.style.top = gameState.p1.y + 'px';
    t1.style.transform = `rotate(${gameState.p1.deg}deg)`;
    t2.style.left = gameState.p2.x + 'px'; t2.style.top = gameState.p2.y + 'px';
    t2.style.transform = `rotate(${gameState.p2.deg}deg)`;

    ['p1', 'p2'].forEach((pk, idx) => {
        const p = gameState[pk], enemy = idx === 0 ? gameState.p2 : gameState.p1;
        for (let i = p.bullets.length - 1; i >= 0; i--) {
            const b = p.bullets[i];
            if (b.dir === 0) b.y -= 7; else if (b.dir === 180) b.y += 7;
            else if (b.dir === 270) b.x -= 7; else if (b.dir === 90) b.x += 7;
            b.el.style.left = b.x + 'px'; b.el.style.top = b.y + 'px';

            const hitW = walls.find(w => w.type !== 'water' && b.x > w.x && b.x < w.x + 40 && b.y > w.y && b.y < w.y + 40);
            if (hitW || b.x < 0 || b.x > 1000 || b.y < 0 || b.y > 600) {
                b.el.remove(); p.bullets.splice(i, 1); continue;
            }

            if (b.x > enemy.x && b.x < enemy.x + 34 && b.y > enemy.y && b.y < enemy.y + 34) {
                idx === 0 ? score1++ : score2++;
                score1El.innerText = score1.toString().padStart(2, '0');
                score2El.innerText = score2.toString().padStart(2, '0');
                b.el.remove(); p.bullets.splice(i, 1);
                if (score1 >= 5 || score2 >= 5) {
                    isGameOver = true; victoryScreen.style.display = 'flex';
                    document.getElementById('victory-msg').innerText = score1 >= 5 ? 'ИГРОК 1 ПОБЕДИЛ!' : 'ИГРОК 2 ПОБЕДИЛ!';
                } else { resetPos(); }
            }
        }
    });
    requestAnimationFrame(update);
}
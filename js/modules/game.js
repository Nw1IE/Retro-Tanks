function fire(player, board) {
    const p = gameState[player];
    if (p.bullets.length > 2) return; 
    const b = { x: p.x + 14, y: p.y + 14, dir: p.deg, el: document.createElement('div') };
    b.el.className = 'bullet';
    board.appendChild(b.el);
    p.bullets.push(b);
}

function resetPos() {
    gameState.p1.x = 40; gameState.p1.y = 40; gameState.p1.deg = 90;
    gameState.p2.x = 920; gameState.p2.y = 520; gameState.p2.deg = 270;
    [gameState.p1, gameState.p2].forEach(p => { 
        p.bullets.forEach(b => b.el.remove()); 
        p.bullets = []; 
    });
}
const gameState = {
    p1: { x: 40, y: 40, deg: 90, color: '#00ff00', bullets: [], size: 34 },
    p2: { x: 920, y: 520, deg: 270, color: '#ffff00', bullets: [], size: 34 }
};

const maps = [
    [
        {x: 480, y: 240, w: 40, h: 120, t: 'concrete'}, {x: 400, y: 280, w: 200, h: 40, t: 'concrete'},
        {x: 200, y: 240, w: 120, h: 120, t: 'water'}, {x: 680, y: 240, w: 120, h: 120, t: 'water'},
        {x: 40, y: 240, w: 80, h: 120, t: 'bush'}, {x: 880, y: 240, w: 80, h: 120, t: 'bush'},
        {x: 440, y: 40, w: 120, h: 80, t: 'bush'}, {x: 440, y: 480, w: 120, h: 80, t: 'bush'},
        {x: 160, y: 40, w: 40, h: 160, t: 'brick'}, {x: 160, y: 400, w: 40, h: 160, t: 'brick'},
        {x: 800, y: 40, w: 40, h: 160, t: 'brick'}, {x: 800, y: 400, w: 40, h: 160, t: 'brick'},
        {x: 320, y: 120, w: 120, h: 40, t: 'brick'}, {x: 560, y: 120, w: 120, h: 40, t: 'brick'},
        {x: 320, y: 440, w: 120, h: 40, t: 'brick'}, {x: 560, y: 440, w: 120, h: 40, t: 'brick'}
    ],
    [
        {x: 240, y: 0, w: 40, h: 200, t: 'brick'}, {x: 240, y: 400, w: 40, h: 200, t: 'brick'},
        {x: 720, y: 0, w: 40, h: 200, t: 'brick'}, {x: 720, y: 400, w: 40, h: 200, t: 'brick'},
        {x: 480, y: 100, w: 40, h: 400, t: 'concrete'},
        {x: 0, y: 280, w: 160, h: 40, t: 'water'}, {x: 840, y: 280, w: 160, h: 40, t: 'water'},
        {x: 360, y: 280, w: 80, h: 40, t: 'bush'}, {x: 560, y: 280, w: 80, h: 40, t: 'bush'}
    ],
    [
        {x: 160, y: 120, w: 80, h: 80, t: 'concrete'}, {x: 760, y: 120, w: 80, h: 80, t: 'concrete'},
        {x: 160, y: 400, w: 80, h: 80, t: 'concrete'}, {x: 760, y: 400, w: 80, h: 80, t: 'concrete'},
        {x: 440, y: 240, w: 120, h: 120, t: 'brick'},
        {x: 0, y: 240, w: 40, h: 120, t: 'brick'}, {x: 960, y: 240, w: 40, h: 120, t: 'brick'},
        {x: 440, y: 0, w: 120, h: 40, t: 'water'}, {x: 440, y: 560, w: 120, h: 40, t: 'water'}
    ]
];
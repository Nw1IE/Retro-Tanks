function createTank(id, color) 
{
    const div = document.createElement('div');
    div.id = id; div.className = 'tank';
    div.innerHTML = 
        `<svg viewBox="0 0 30 30"><rect x="4" y="4" width="22" height="22" fill="${color}"/><rect x="12" y="0" width="6" height="15" fill="${color}"/><rect x="0" y="2" width="6" height="26" fill="#333"/><rect x="24" y="2" width="6" height="26" fill="#333"/></svg>`;
    return div;
}

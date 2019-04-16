// 创建标签
var divTip = `<div id="tip">
                <p>使用"W""A""S""D"键控制太空船躲避宇宙碎片</p>
                <p>注意：需要先用鼠标点一下这个页面，让页面的焦点切换到这个游戏页面上</p>
            </div>
            <canvas id='canvas' width="300" height="420"></canvas>
            <button id='reset'>重新开始</button>`
document.body.innerHTML = divTip;

var ctx = document.getElementById('canvas').getContext('2d');

// 数据对象
var game = {
    isover: false,
    spaceShip: {
        x: 120,
        y: 270
    },
    desire: []
}

// 绘制飞船
var createShip = function () {
    ctx.fillStyle = "#F08080";
    ctx.fillRect(game.spaceShip.x, game.spaceShip.y, 30, 30);
}

// 绘制随机生成的碎片
var createDesire = function () {
    let num = Math.floor(Math.random() * 300);  //  在canvas的宽度内产生碎片
    game.desire.push({ x: num, y: 0 }); // 描绘碎片的坐标
}

// 绘制碎片移动，并且判断是否相撞
var drawDesire = function () {
    ctx.clearRect(0, 0, 300, 420);  // 格式化重新渲染页面

    for (let index = 0; index < game.desire.length; index++) {
        const element = game.desire[index];
        ctx.fillStyle = 'green';
        ctx.fillRect(element.x, element.y++, 30, 30);   // 将desire中的碎片全部绘制到页面
        // 判断飞船与碎片是否相撞
        if (Math.abs(element.x - game.spaceShip.x) <= 30 && Math.abs(element.y++ - game.spaceShip.y) <= 30) {
            ctx.font = '40px Arial';
            ctx.fillStyle = 'blue';
            ctx.fillText('GAME OVER!', 20, 200);
            game.isover = true; // 若相撞将isover置为true
        }
    }
}

// 游戏进行时事件处理
var move = function () {
    if (game.isover === true) {   // 判断是否相撞
        return;
    }
    else if (Math.floor(Math.random() * 30) % 30 === 1) {   // 控制碎片随机出现的数量
        createDesire()
    }
    drawDesire();
    createShip();
}

// 键盘控制事件
var left = function () {
    if (game.spaceShip.x < 30)  // 飞船移至左边界时会穿越到右边
        game.spaceShip.x = canvas.width - 30;
    else
        game.spaceShip.x -= 5;
}
var right = function () {
    if (game.spaceShip.x === canvas.width - 30)  // 飞船移至右边界时会穿越到左边
        game.spaceShip.x = 0;
    else
        game.spaceShip.x += 5;
}
var up = function () {
    if (game.spaceShip.y === 0)  // 飞船禁止在上边界(不能穿越)
        game.spaceShip.y === 0;
    else
        game.spaceShip.y -= 5;
}
var down = function () {
    if (game.spaceShip.y === canvas.height - 30) // 飞船禁止在下边界（不能穿越）
        game.spaceShip.y = canvas.width - 5;
    else
        game.spaceShip.y += 5;
}

// 获取键盘按下
var keys = {};
addEventListener('keydown', function (e) {
    keys[e.keyCode] = true
}, false);
addEventListener('keyup', function (e) {
    delete keys[e.keyCode]
}, false);
var keyEvent = function () {
    if (87 in keys)
        up();

    if (83 in keys)
        down()

    if (65 in keys)
        left()

    if (68 in keys)
        right()
}

var animate = function () {
    keyEvent()
    move();
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// 重新开始按钮
var reset = document.getElementById('reset');
reset.addEventListener('click', function () {
    location.reload();
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    PizzaVillain.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let PizzaVillain: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(assets.image`HeroDuck`, SpriteKind.Player)
controller.moveSprite(mySprite)
PizzaVillain = sprites.create(assets.image`PizzaVillain`, SpriteKind.Food)

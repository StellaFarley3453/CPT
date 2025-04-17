//set things up
tiles.setCurrentTilemap(tilemap`level`)
let princess = sprites.create(assets.image`princess_facing_down`)
scene.cameraFollowSprite(princess)
controller.moveSprite(princess)
tiles.placeOnTile(princess, tiles.getTileLocation(53, 7))
let interactbox:Sprite = null

// this variable is to keep track of what direction the player sprite is facing.
// 1 is up, 2 is right, 3 is down, 4 is left.
let direction = 3

//event handlers
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 4
    animation.runImageAnimation(princess,assets.animation`princess_Walk_Left`,100,true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    animation.runImageAnimation(princess, assets.animation`princess_Walk_Right`, 100, true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    animation.runImageAnimation(princess, assets.animation`princess_Walk_Up`, 100, true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
    animation.runImageAnimation(princess, assets.animation`princess_Walk_Down`, 100, true)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (!controller.up.isPressed() && !controller.left.isPressed() && !controller.right.isPressed() && !controller.down.isPressed()){
    animation.stopAnimation(animation.AnimationTypes.All, princess)
    }
    //princess.setImage(assets.image`princess_facing_left`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (!controller.up.isPressed() && !controller.left.isPressed() && !controller.right.isPressed() && !controller.down.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, princess)
    }
    //princess.setImage(assets.image`princess_facing_right`)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (!controller.up.isPressed() && !controller.left.isPressed() && !controller.right.isPressed() && !controller.down.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, princess)
    }
    //princess.setImage(assets.image`princess_facing_up`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (!controller.up.isPressed() && !controller.left.isPressed() && !controller.right.isPressed() && !controller.down.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, princess)
    }
    //princess.setImage(assets.image`princess_facing_down`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed,function(){
if (direction == 1) {
    let interactbox = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
    interactbox.lifespan = 500
    interactbox.setPosition(princess.x,princess.y-16)
    //interactbox.setFlag(SpriteFlag.Invisible,true)
}
if (direction == 2) {
    let interactbox = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
    interactbox.lifespan = 500
    interactbox.setPosition(princess.x + 16, princess.y)
    interactbox.setFlag(SpriteFlag.Invisible, true)
}
if (direction == 3) {
    let interactbox = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
    interactbox.lifespan = 500
    interactbox.setPosition(princess.x, princess.y + 16)
    interactbox.setFlag(SpriteFlag.Invisible, true)
}
if (direction == 4) {
    interactbox = sprites.create(assets.image`myImage`, SpriteKind.Projectile)
    interactbox.lifespan = 500
    interactbox.setPosition(princess.x - 16, princess.y)
    interactbox.setFlag(SpriteFlag.Invisible, true)
}
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`red_lever_up`, function (sprite, location) {
    sprites.destroy(interactbox)
})
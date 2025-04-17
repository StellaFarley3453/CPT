//set things up
tiles.setCurrentTilemap(tilemap`level`)
let princess = sprites.create(assets.image`princess_facing_down`)
scene.cameraFollowSprite(princess)
controller.moveSprite(princess)
tiles.placeOnTile(princess, tiles.getTileLocation(53, 7))

// this variable is to keep track of what direction the player sprite is facing.
// 1 is up, 2 is right, 3 is down, 4 is left.
let direction = 3

//event handlers
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 4
    animation.runImageAnimation(princess,)
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    princess.setImage(assets.image`myImage`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    princess.setImage(assets.image`myImage`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
    princess.setImage(assets.image`myImage`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, princess)
    princess.setImage(assets.image`princess_facing_left`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, princess)
    princess.setImage(assets.image`princess_facing_right`)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, princess)
    princess.setImage(assets.image`princess_facing_up`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, princess)
    princess.setImage(assets.image`princess_facing_down`)
})

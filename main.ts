//set things up
tiles.setCurrentTilemap(tilemap`level`)
let princess = sprites.create(assets.image`princess_facing_down`)
scene.cameraFollowSprite(princess)
controller.moveSprite(princess)
tiles.placeOnTile(princess, tiles.getTileLocation(53, 7))

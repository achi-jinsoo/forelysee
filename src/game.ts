import kaboom from "kaboom"
import "kaboom/global"

kaboom()

loadBean()

add([
	pos(120, 80),
	sprite("bean"),
])

onClick(() => addKaboom(mousePos()))
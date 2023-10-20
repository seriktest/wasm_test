import initSync, { World } from "untitled3";


initSync().then(_ => {
    const world = World.new();
    console.log(world.width());
});
use wasm_bindgen::prelude::wasm_bindgen;
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(Default)]
pub struct World {
    width: usize,
}

#[wasm_bindgen]
impl World {
    pub fn new() -> World {
        World {
            width: 8
        }
    }
    pub fn width(&self) -> usize {
        self.width
    }
}


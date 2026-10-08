if (typeof globalThis !== "undefined") {
    if (typeof globalThis.DOMMatrix === "undefined") {
        globalThis.DOMMatrix = class DOMMatrix {
        };
    }
    if (typeof globalThis.ImageData === "undefined") {
        globalThis.ImageData = class ImageData {
        };
    }
    if (typeof globalThis.Path2D === "undefined") {
        globalThis.Path2D = class Path2D {
        };
    }
}
export {};

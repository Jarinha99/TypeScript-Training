namespace Geometry {
    export namespace Area {
        export const PI = 3.14

        export function circle(radius: number): number{
            return PI * Math.pow(radius, 2)
        }

        export function rectangle(base: number, height: number): number{
            return base * height
        }
    }
}

const PI = 123820321


console.log(Geometry.Area.circle(10))
console.log(Geometry.Area.rectangle(10, 5))
console.log(Geometry.Area.PI)
console.log(PI)
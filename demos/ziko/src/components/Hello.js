import { tags } from "ziko/ui"
const Hello=({name})=>{
    return tags.h1(`Hello ${name}`).style({
        color : "gold",
    })
}
export default Hello
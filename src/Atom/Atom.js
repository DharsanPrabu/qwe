import {atom} from "jotai"

const newAtom = atom([])

export const datafetch = atom(
    null,
    async(get,set,args) =>{

        let res1=[
            {
              id:1,
              label:"1660069800000",
              data:1
            },
            {
              id:1,
              label:"1660415400000",
              data:3
            },
            {
              id:1,
              label:"1660761000000",
              data:6
            },
            {
              id:1,
              label:"1661106600000",
              data:8
            },
            {
              id:1,
              label:"1661452200000",
              data:7
            },
            {
              id:1,
              label:"1661797800000",
              data:8
            },
            {
              id:1,
              label:"1662143400000",
              data:4
            },
            {
              id:1,
              label:"1662489000000",
              data:8
            },
            {
              id:1,
              label:"1662834600000",
              data:8
            }
          ]
          set(newAtom, res1)
    
    
    }
)
export default newAtom




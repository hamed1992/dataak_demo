import {useContext} from 'react'
import {  darkModeDispatch } from './../App'
function useDarkToggleDispatch() {
    return useContext(darkModeDispatch)
}

export {useDarkToggleDispatch}

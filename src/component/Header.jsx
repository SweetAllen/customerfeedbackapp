import React from "react";
import { Image } from "react-native";
import logo from '../assets/images/logo.png'
const Header = () =>{
    return(
<Image
  source={logo}
  style={{width: 250, height: 40,marginTop:60, marginLeft:-350}}
/>
    )
}

export default Header;
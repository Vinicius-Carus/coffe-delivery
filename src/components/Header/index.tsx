import { MapPin } from "@phosphor-icons/react";
import Cart from "../Buttons/Cart";
import { HeaderStyle } from "./style";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderStyle>
      <div className="header-div">
        <div className="logo-div">
          <NavLink to="/">
            <img src="images/svg/Logo.svg" alt="Logo coffee delivery" />
          </NavLink>
        </div>
        <div className="actions-div">
          <div className="location-div">
            <p>
              <MapPin weight="fill" size={22} /> Porto Alegre, RS
            </p>
          </div>
          <div>
            <NavLink to="checkout">
              <Cart />
            </NavLink>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
}

import React from "react";
import PropTypes from "prop-types";
import HeaderButton from "./HeaderButton";
import HeaderLink from "./HeaderLink";
import Links from "./Links";

import { FaBell, FaSearchengin, FaBars } from "react-icons/fa6";

const HeaderRow = ({ changeSettingBool, searchSection }) => (
  <div id="header-row">
    <ul className="news-link-ul">
      <HeaderButton
        className={searchSection ? "search" : ""}
        clickValue="searchSection"
        onClick={changeSettingBool}
      >
        <FaSearchengin className="standard-icon" />
      </HeaderButton>

      <HeaderButton clickValue="tableofcontents" onClick={changeSettingBool}>
        <span>Sections&nbsp;</span>
        <FaBars className="standard-icon" />
      </HeaderButton>
      {Links.map((link) => (
        <HeaderLink {...link} key={link.title} />
      ))}
    </ul>

    <ul className="news-link-ul">
      <HeaderLink>
        <FaBell className="standard-icon" />
      </HeaderLink>
    </ul>
  </div>
);

HeaderRow.propTypes = {
  changeSettingBool: PropTypes.func,
  searchSection: PropTypes.bool,
};

export default HeaderRow;

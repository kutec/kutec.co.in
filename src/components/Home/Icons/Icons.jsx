import React from "react";
// import { Link } from "gatsby";
import config from "../../../../data/SiteConfig";

function Icons() {
  const icons = config.homeIcons;
  console.log("icons::: ", icons);

  return (
    <div class="d-grid gap-2 mx-auto">
      <div className="display-4 mt-5 mb-5">
        {icons.map((icon) => (
          <a className={icon.badgeClasses} key={icon.id} href={icon.url}>
            <i className={icon.iconClasses}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Icons;

import React from "react";
// import { Link } from "gatsby";
import config from "../../../../data/SiteConfig";

function Icons() {
  const icons = config.homeIcons;
  console.log("icons::: ", icons);

  return (
    <div class="d-grid gap-2 mx-auto">
      <div className="home-icons display-4 mt-4 mb-4">
        {icons.map((icon) => (
          <a
            className={icon.badgeClasses}
            key={icon.id}
            href={icon.url}
            data-label={icon.label}
          >
            <i className={icon.iconClasses}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Icons;

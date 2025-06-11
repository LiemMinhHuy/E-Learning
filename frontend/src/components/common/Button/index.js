import React from "react";
import { Link } from "react-router-dom";

function Button({ children, href, className = "", ...props }) {
  const baseClass =
    "inline-flex items-center justify-center  rounded-full uppercase font-medium border border-black text-base shadow-[5px_5px_0_rgba(0,0,0)] " +
    className;

  // Kiểm tra nếu href là link nội bộ thì dùng Link, nếu là external thì dùng thẻ a
  const isInternal = href && /^\/?(?!\/\/|https?:|mailto:|tel:)/.test(href);

  if (href) {
    if (isInternal) {
      return (
        <Link to={href} className={baseClass} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}

export default Button;

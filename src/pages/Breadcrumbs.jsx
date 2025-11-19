import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Generate breadcrumbs from the current path
  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(path => path);
    
    const breadcrumbs = paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`;
      const label = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return {
        href,
        label
      };
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">
            Home
          </Link>
          <span className="breadcrumbs__separator">/</span>
        </li>
        
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={breadcrumb.href} className="breadcrumbs__item">
              {isLast ? (
                <span 
                  className="breadcrumbs__current"
                  aria-current="page"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <>
                  <Link to={breadcrumb.href} className="breadcrumbs__link">
                    {breadcrumb.label}
                  </Link>
                  <span className="breadcrumbs__separator">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

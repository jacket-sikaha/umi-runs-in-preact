import React, { FunctionComponent, ReactNode } from 'react';

export interface CellProps {
  title: ReactNode;
  description: ReactNode;
  extra: ReactNode;
  radius: string | number;
  align: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const defaultProps = {
  title: null,
  description: null,
  extra: null,
  radius: '6px',
  align: 'flex-start',
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps;

const classPrefix = 'nut-cell';

export const Cell1: FunctionComponent<
  Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> & { Group: any } = (props) => {
  //   const ctx = useContext(CellGroupContext)
  const {
    children,
    onClick,
    title,
    description,
    extra,
    radius,
    align,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event);
  };

  const baseStyle = {
    ...style,
    borderRadius: Number.isNaN(Number(radius)) ? String(radius) : `${radius}px`,
    alignItems: align,
  };

  const styles =
    title || description
      ? {}
      : {
          flex: 1,
        };
  return (
    <div onClick={(event) => handleClick(event)} style={baseStyle} {...rest}>
      {children || (
        <>
          {title || description ? (
            <div className={`${classPrefix}-left`}>
              {title ? (
                <div className={`${classPrefix}-title`}>{title}</div>
              ) : null}
              {description ? (
                <div className={`${classPrefix}-description`}>
                  {description}
                </div>
              ) : null}
            </div>
          ) : null}
          {extra ? (
            <div
              className={`${classPrefix}-extra`}
              style={styles as React.CSSProperties}
            >
              {extra}
            </div>
          ) : null}
        </>
      )}
      <div className={`${classPrefix}-divider`} />
    </div>
  );
};

Cell1.defaultProps = defaultProps;
Cell1.displayName = 'NutCell';

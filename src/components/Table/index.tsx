import React from 'react';

import styles from './Table.module.scss';

type TableProps = {
  title: string;
  headers: string[];
  children: React.ReactNode;
  loading?: boolean;
};

const Table = ({ title, headers, children }: TableProps) => {
  return (
    <div className={styles.TableWrapper}>
      <h5>{title}</h5>
      <div className={styles.Table}>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

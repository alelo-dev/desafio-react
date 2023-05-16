import "../../styles/components/table.scss";

interface Props {
  header: string[];
  rows: HTMLTableRowElement;
}

const Table = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.header.map((head: string) => {
            return <th key={head}>{head}</th>;
          })}
        </tr>
      </thead>
      <tbody>{props.rows}</tbody>
    </table>
  );
};

export default Table;

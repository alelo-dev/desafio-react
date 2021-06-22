import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: auto;
  @media screen and (max-width: 600px) {
    
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  table th {
    display: none;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
`;
export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  th, td {
  text-align: left;
  padding: .8rem;
}
  tr:nth-child(even){background-color: ${props => props.theme.colors.commons.whiteLight}}
`;

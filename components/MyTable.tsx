import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ConsumerMessage } from "../interfaces/consumerMessage";

interface Props {
  data: Promise<Array<ConsumerMessage>>;
}

export const MyTable = (props: Props) => {
  let rows: Array<ConsumerMessage> = [];

  useEffect(() => {

    (async () => {
        rows = await Promise.resolve(props.data);
    })();

  }, []);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Message Sent</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.text}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

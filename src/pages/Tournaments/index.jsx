import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTournamentsListThunk } from "../../store/modules/tournaments/thunk";
import { IsValidState } from "../../components/IsValidState";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "id", label: "Id", minWidth: 170 },
  { id: "game", label: "Jogo", minWidth: 170 },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export const Tournaments = ({ token, setToken }) => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const historico = useHistory();

  useEffect(() => {
    dispatch(updateTournamentsListThunk());
  }, []);

  useEffect(() => {
    let rowData = [];
    if (IsValidState(tournaments.tournamentsList)) {
      tournaments.tournamentsList.forEach(({ id, game }) => {
        rowData = [...rowData, createData(id, game)];
      });
    }
    console.log(tournaments);
    setRows(rowData);
  }, [tournaments]);

  function createData(id, game) {
    return { id, game };
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      {rows.length > 0 && (
        <TableContainer className={classes.container}>
          <Table key="table" stickyHeader aria-label="sticky table">
            <TableHead key="cabecalho">
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={"column" + column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#004d00",
                      color: "#FFF",
                      fontWeight: "bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

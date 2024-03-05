import { useEffect } from "react";
// import Loading from "../../loading/Loading";
import fetchGet, { Datum } from "../../../data/fetchGet";
import { useState } from "react";
import { Table, Anchor } from "@mantine/core";
import { Button } from "..";
import style from "./TableReviews.module.css";
const TableData = () => {
  // const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState<Datum[]>([]);

  useEffect(() => {
    fetchGet("/metalmecanica/employee/detailall")
      .then((data) => {
        setList(data.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const rows = list.map((row) => {
    return (
      <Table.Tr key={row.id_employee}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.user_name}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.user_type}</Table.Td>
        <Table.Td>
          <div className={style.containerAcction}>
            {
              <Button
                buttonActionType="Download"
                heightIcon={30}
                withIcon={40}
              />
            }
            {<Button buttonActionType="Edit" heightIcon={30} withIcon={40} />}
            {<Button buttonActionType="Delete" heightIcon={30} withIcon={40} />}
          </div>
        </Table.Td>
        <Table.Td></Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Employee</Table.Th>
            <Table.Th>Puesto</Table.Th>
            <Table.Th>Acciones</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};
export default TableData;

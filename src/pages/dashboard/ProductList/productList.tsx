
import { TableBody, TableCell, TableHead, TableRow, tabsClasses, TextField, Button } from "@mui/material"
import Table from '@mui/material/Table';
import { Box } from "@mui/system";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import UpdateProduct from '../ProductList/UpdateProduct'
import useFetchData from "./useFetchData";



const ProductList = () => {
  const [isShown, setIsShown] = useState(false);
  const [productSelectedId, setProductSelectedId] = useState(0);

  //custom Hook
  const { data } = useFetchData("https://api.github.com/users");


  const handleUpdate = (Id: number) => {
    //setIsShown(current => !current);
    setIsShown(true);
    setProductSelectedId(Id);
    console.log(productSelectedId);
  };
  const handleIsShow = (ishow: boolean) => {
    setIsShown(ishow);
  };

  return (<>
    <Box className="mt-8 text-base font-bold">
      <p>ProductList Count: {useAppSelector((state) => state.product.length)}</p>
      <Table>
        <TableBody>

          {useAppSelector((state) => state.product).map((item, index) =>
            <TableRow >
              <TableCell>
                {item.id}
              </TableCell>
              <TableCell>
                {item.productName}
              </TableCell>
              <TableCell>
                {item.price}
              </TableCell>
              <TableCell>
                <Button className="mx-auto w-1/2" variant="contained" onClick={() => handleUpdate(item.id)}>update</Button>
              </TableCell>
            </TableRow>

          )}

        </TableBody>
      </Table>

      {isShown && <UpdateProduct productId={productSelectedId} handleIsShow={handleIsShow} />}


      {data && (
        (data as any[]).map((user: any) => (
          <div className="text-gray-600 border-green-300 " key={user.id}>
            <h1> {user.login} </h1>
            <p> {user.type} </p>
            <h5></h5>
          </div>
        ))
      )}
    </Box></>)
}
export default ProductList
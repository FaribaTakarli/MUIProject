
import { Box, TextField, Typography, Button } from "@mui/material"
import { Console } from "console";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { addProduct, updateOneProduct } from "../../../store/slices/productSlice";
import productModel from './model';

const UpdateProduct = (props: any) => {
  const { handleIsShow } = props;
  const [product, setProduct] = useState({} as productModel);
  let selectedProduct = useAppSelector((state) => state.product.filter(x => x.id == props.productId))


  useEffect(() => {
    console.log('child:', props.productId);
    setProduct(selectedProduct[0]);
  }, [props.productId])

  const dispach = useAppDispatch();

  function Update() {
    dispach(updateOneProduct(product));
    handleIsShow(false);
  }

  function updateProduct(event: any) {
    var newProduct = { ...product };
    switch (event.target.name) {
      case 'ProductName':
        newProduct.productName = event.target.value;
        break;
      case 'Price':
        newProduct.price = event.target.value;
        break;

    }
    setProduct(newProduct);
  }

  return (
    <Box className="flex flex-col justify-center p-8">
      <Typography variant="body1" className="text-base font-bold">UpdateProduct </Typography>
      {/* focused */}
      <TextField fullWidth label="ID" name="ID" value={product.id} variant="outlined" className="m-4" />
      <TextField fullWidth label="ProductName" name="ProductName" value={product.productName} variant="outlined" className="m-4" onChange={(event) => updateProduct(event)} />
      <TextField fullWidth label="Price" name="Price" value={product.price} variant="outlined" className="m-4" onChange={(event) => updateProduct(event)} />
      <Button className="mx-auto w-1/2" variant="contained" onClick={Update}>Save</Button>
    </Box>
  );
}
export default UpdateProduct
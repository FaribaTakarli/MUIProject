
import { Box, TextField, Typography, Button } from "@mui/material"
import { Console } from "console";
import { stringify } from "querystring";
import { useState, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { addProduct, updateOneProduct } from "../../../store/slices/productSlice";
import productModel from './model';
import MyTextField from '../../../components/TextField/TextField'

const AddProduct = () => {
  const [product, setProduct] = useState({ productName: '', price: undefined, id: undefined } as productModel);

  ///ref
  const ref = useRef<HTMLInputElement>(null);

  ///reduux
  const dispach = useAppDispatch();

  function Add() {
    dispach(addProduct(product));
    let restPro: productModel = { productName: '', price: undefined, id: 0 } as productModel;
    setProduct(restPro);
    console.log('state', product);
    //setTimeout(() => { console.log('update/pro/log', product); }, 2000)

    //ref

    ref.current?.focus();



  }
  useEffect(() => {
    console.log('update:');
    setProduct({} as productModel);


  }, [])


  function updateProduct(event: any) {
    var newProduct = { ...product };
    switch (event.target.name) {
      case 'ID':
        newProduct.id = event.target.value;
        break;
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
      <Typography variant="body1" className="text-base font-bold">Add new Product </Typography>
      {/* focused */}
      <TextField fullWidth label="ID" name="ID" value={product.id?.toString()} variant="outlined" className="m-4" onChange={(event) => updateProduct(event)} />
      <TextField fullWidth label="ProductName" name="ProductName" value={product.productName} variant="outlined" className="m-4" onChange={(event) => updateProduct(event)} />
      {/* <TextField fullWidth label="Price" name="Price" value={product.price} variant="outlined" className="m-4" onChange={(event) => updateProduct(event)} /> */}
      <MyTextField label="Price" name="Price" value={product.price} textClassName="m-4" update={updateProduct} ref={ref} />

      <Button className="mx-auto w-1 /2" variant="contained" onClick={Add}>Save</Button>

    </Box >
  );
}
export default AddProduct
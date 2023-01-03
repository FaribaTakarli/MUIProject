import { TextField as MUITxtfield } from "@mui/material";
import { forwardRef } from "react";

interface IProp {
    label: string,
    name: string,
    value?: Number,
    textClassName: string,
    update: Function

}

const MyTextField = forwardRef((props: IProp, ref: any) => {
    const { label, name, value, textClassName, update } = props;
    return (
        <MUITxtfield variant="outlined" label={label} name={name} value={value} className={textClassName} onChange={(event) => update(event)} inputRef={ref} />
    )

})
export default MyTextField
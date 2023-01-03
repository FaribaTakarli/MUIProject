import { Divider } from "@mui/material";
import SideBar from "./SideBar";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

const WithLayout = (props: any) => {
    return (
        <>
            <PrimarySearchAppBar />
            <SideBar />
            {props.children}
        </>
    );
}


export default WithLayout;
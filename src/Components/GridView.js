import { Box, Typography } from "@material-ui/core";
import React from "react";
import ProductView from "./ProductView";

const GridView = () => {
	return (
		<Box width="400px" bgcolor="white" p="16px" mx="auto">
			<Typography variant="h5">Title</Typography>
			<Box display="flex" p="16px" justifyContent="Center">
				<ProductView />
				<ProductView />
			</Box>
			<Box display="flex" p="16px" justifyContent="Center">
				<ProductView />
				<ProductView />
			</Box>
		</Box>
	);
};

export default GridView;

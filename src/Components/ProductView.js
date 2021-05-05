import { Box, Typography } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
import React from "react";

const ProductView = () => {
	return (
		<Box p="18px" bgcolor="white" boxShadow="9px" mx="4px" borderRadius="16px">
			<img
				style={{ height: "120px", width: "120px", backgroundColor: grey[50] }}
			/>
			<Typography variant="subtitle1">Title</Typography>
			<Typography variant="subtitle2">
				<span style={{ color: green.A700 }}>Discount%</span>
			</Typography>
			<Typography variant="h6">Rs.##</Typography>
		</Box>
	);
};

export default ProductView;

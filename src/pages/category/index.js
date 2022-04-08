import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import jsonCateogries from "src/json/json-category";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { CustomLink } from "src/components";
const Category = () => (
  <Layout>
    <Breadcrumb currentPage="Categories" />

    <div className="w-full">
      <List sx={{ width: "100%", bgcolor: "background.paper" }} aria-label="contacts">
        {jsonCateogries.map((category) => (
          <CustomLink href={`/category/${category.id}`} key={category.id}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          </CustomLink>
        ))}
      </List>
    </div>
    {/* <BackToTop /> */}
    {/* <Footer /> */}
  </Layout>
);

export default Category;
